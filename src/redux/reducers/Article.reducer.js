const initialState = {
  article: {},
  articles: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'LOAD_ARTICLES':
      return {
        ...state,
        action.articles
      }
    case 'VIEW_ARTICLE':
      return {
        ...state,
        action.article
      }
    case 'CLAP_ARTICLE':
      let article = Object.assign({}, action.article)
      article.claps++
      console.log('Article from redux state --!')
      console.log(article)
      return {
        ...state,
        article
      }
    default:
      return state
  }
}