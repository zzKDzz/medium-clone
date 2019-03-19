const article = require('./Article.routes')
const user = require('./User.routes')

module.exports = router => {
  user(router),
  article(router)
}