import axios from 'axios'

import { doToggleModal } from '../reducers/Common.reducer';
import { doClap, doLoadAll, doViewOne } from '../reducers/Article.reducer';
import { doSetUser, doSetProfile, doFollowUser } from '../reducers/User.reducer';

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/'

export function loadArticles(){
  return dispatch => {
    axios.get(url + 'articles').then(res => {
      let articles = res.data
      doLoadAll(articles)
    }).catch(err => console.error(err))
  }
}

export function getUser(_id){
  return axios.get(`${url}user/${_id}`).then(res => {
    return res.data
  }).catch( err => console.error(err))
 }


export function getUserProfile(_id){
  return dispatch => {
    axios.get(`${url}user/profile/${_id}`).then(res => {
      let profile = res.data
      // dispatch({type: 'SET_PROFILE', profile})
      doSetProfile(profile)
    }).catch(err => console.error(err))
  }
}

export function getArticle(article_id){
  return dispatch => {
    axios.get(`${url}article/${article_id}`).then(res => {
      let article = res.data
      // dispatch({type: 'VIEW_ARTICLE', article})
      doViewOne(article)
    }).catch(err => console.error(err))
  }
}

// export function comment(){
//   return dispatch => {}
// }

export function clap(article_id){
  return dispatch => {
    axios.post(`${url}article/clap`,{ article_id }).then(res => {
      // dispatch({type:'CLAP_ARTICLE'})
      doClap(res.data)
    }).catch(err => console.error(err))
  }
}

export function follow(id, user_id){
  return dispatch => {
    axios.post(`${url}user/follow`,{ id, user_id }).then(res => {
      // dispatch({type:'FOLLOW_USER', user_id})
      doFollowUser(id, user_id)
    }).catch(err => console.error(err)) 
  }
}


export function SignInUser(user_data){
  return dispatch => {
      axios.post(`${url}user`,user_data).then(res => {
      let user = res.data
      localStorage.setItem('Auth', JSON.stringify(user))
      // dispatch({type: 'SET_USER', user})
      doSetUser(user)
  }).catch(err => console.log(err))
  }
}
 export function toggleClose(){
  return dispatch => {
    // dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    doToggleModal(false)
  }
}
 export function toggleOpen(){
  return dispatch => {
  // dispatch({type: 'TOGGLE_MODAL', modalMode: true}) 
    doToggleModal(true)
  } 
 }
 