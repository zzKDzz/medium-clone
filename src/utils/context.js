import React from 'react'

const initialState = {
  articleState: {
    article: {},
    articles: []
  },
  userState: {
    user: {},
    isAuthed: false,
    profile: {}
  },
  commonState: {
    appName: '',
    modalMode: false
  }
}

const AppContext = React.createContext(initialState)
export default AppContext