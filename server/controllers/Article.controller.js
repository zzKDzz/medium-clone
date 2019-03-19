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

getAllArticles = (req, res, next) => {
  Article.find(req.params.id).then((err, arts) => {
    if(err)
      res.send(err)
    else if(!arts)
      res.send(400)
    else
      res.send(arts)
    next
  })
}

clapForArticle = (req, res, next) => {
  Article.findById(req.body.article_id).then(
    art => art.clap().then(
      () => res.json({msg: 'Done clapping!'})
    )
  ).catch(next)
}

commentOnArticle = (req, res, next) => {
  let comm = {
    author: req.body.author_id,
    text: req.body.comment
  }
  Article.findById(req.body.article_id).then(
    art => art.comment(comm).then(
      () => res.json({msg: 'Done commenting!'})
    )
  ).catch(next)
}

getArticle = (req, res, next) => {
  Article.findById(req.params.id).populate('author').populate('comments.author').exec((err, art) => {
    if(err)
      res.send(err)
    else if(!art)
      res.send(400)
    else
      res.send(art)
    next
  })
}

module.exports = {
  addArticle,
  getAllArticles,
  clapForArticle,
  commentOnArticle,
  getArticle
}