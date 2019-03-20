const initialState = {
  user: {},
  isAuthed: false,
  profile: {}
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        isAuthed: Object.keys(action.user).length > 0 ? true : false,
        user: action.user
      }
    case 'FOLLOW_USER':
      let user = Object.assign({}, action.user)
      user.followers.push(action.user_id)
      return {
        ...state,
        user
      }
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}