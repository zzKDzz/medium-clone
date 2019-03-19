const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  hero_img: String,
  claps: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String
  }],
})

ArticleSchema.methods.clap = () => {
  this.claps++
  return this.save()
}
ArticleSchema.methods.comment = (comm) => {
  this.comments.push(comm)
  return this.save()
}
ArticleSchema.methods.addAuthor = (author_id) => {
  this.author = author_id
  return this.save()
}
ArticleSchema.methods.getUserArticle = (_id) => {
  return Article.find({'author': _id}).then(article => article)
}

module.exports = mongoose.model('Article', ArticleSchema)