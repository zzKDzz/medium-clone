// import { combineReducers } from 'redux'
import articles from './reducers/Article.reducer.js'
import authUser from './reducers/User.reducer.js'
import common from './reducers/Common.reducer.js'
// import { reactRouter } from 'react-router-redux'

// export default combineReducers({
//   articles,
//   authUser,
//   common,
//   router: routerReducer
// })
export default {
  articles,
  authUser,
  common
}