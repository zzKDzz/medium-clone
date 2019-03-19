const Article = require('./../models/Article')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

addArticle = (req, res, next) => {
  let { title, description, text, claps, hero_img } = req.body
  if(req.files.image){
    cloudinary.uploader.upload(req.files.image.path, response => {
      hero_img = response.url
    }, {
      resource_type: 'image',
      eager: [{effect: 'sepia'}]
    })
  }
  hero_img = hero_img || ''
  saveArticle({title, description, text, claps, hero_img})

  saveArticle = (art) => {
    new Article(art).save((err, article) => {
      if(err)
        res.send(err)
      else if(!article)
        res.send(400)
      else
        return article.addAuthor(req.body.author_id).then(artWithAuthor => res.send(artWithAuthor))
      next()
    })
  }
}


module.exports = {
  addArticle
}