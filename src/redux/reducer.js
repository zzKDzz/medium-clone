// import { combineReducers } from 'redux'

import * as articles from './reducers/Article.reducer.js'
import * as authUser from './reducers/User.reducer.js'
import * as common from './reducers/Common.reducer.js'

// import { reactRouter } from 'react-router-redux'

// export default combineReducers({
//   articles,
//   authUser,
//   common,
//   router: routerReducer
// })

import * as actions from './actions/actions.js'
// console.log(actions)
export default {
  ...actions,
  ...articles,
  ...authUser,
  ...common,
}
// export default {
//   ...articles,
//   ...authUser,
//   ...common
// }