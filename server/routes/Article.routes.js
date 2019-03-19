const ArticleController = require('./../controllers/Article.controller')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = router => {
  router.route('/articles').get(ArticleController.getAllArticles)

  router.route('/article').post(multipartWare, ArticleController.addArticle)

  router.route('/article/clap').post(ArticleController.clapForArticle)

  router.route('/article/comment').post(ArticleController.commentOnArticle)

  router.route('/article/:id').get(ArticleController.getArticle)
}