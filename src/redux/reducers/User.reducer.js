// const initialState = {
//   user: {},
//   isAuthed: false,
//   profile: {}
// }

// export default (state = initialState, action) => {
  // switch(action.type){
  //   case 'SET_USER':
  //     return {
  //       ...state,
  //       isAuthed: Object.keys(action.user).length > 0 ? true : false,
  //       user: action.user
  //     }
  //   case 'FOLLOW_USER':
  //     let user = Object.assign({}, action.user)
  //     user.followers.push(action.user_id)
  //     return {
  //       ...state,
  //       user
  //     }
  //   case 'SET_PROFILE':
  //     return {
  //       ...state,
  //       profile: action.profile
  //     }
  //   default:
  //     return state
  // }
// }

export function doSetUser(user){
  this.setState({
    user,
    isAuthed: Object.keys(user).length > 0 ? true : false,
  })
}

export function doFollowUser(user, id){
  let newUser = Object.assign({}, user)
  newUser.followers.push(id)
  this.setState({user: newUser})
}

export function doSetProfile(profile){
  this.setState({ profile })
}