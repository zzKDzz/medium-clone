// const initialState = {
//   article: {},
//   articles: []
// }

// export default (state = initialState, action) => {
//   switch(action.type){
//     case 'LOAD_ARTICLES':
//       return {
//         ...state,
//         articles: action.articles
//       }
//     case 'VIEW_ARTICLE':
//       return {
//         ...state,
//         article: action.article
//       }
//     case 'CLAP_ARTICLE':
//       let article = Object.assign({}, action.article)
//       article.claps++
//       console.log('Article from redux state --!')
//       console.log(article)
//       return {
//         ...state,
//         article
//       }
//     default:
//       return state
//   }
// }
export function doLoadAll(articles){
  this.setState({ articles })
}
export function doViewOne(article){
  this.setState({ article })
}
export function doClap(article){
  let newArticle = Object.assign({}, article)
  newArticle.claps++
  this.setState({ article: newArticle })
}