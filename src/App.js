import React, { Component } from 'react'
import './App.css'

import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import Header from './components/Header.js'
import Feed from './components/Feed.js'
import Profile from './components/Profile.js'
import ArticleView from './components/ArticleView.js'
import Editor from './components/Editor.js'
import SignInWith from './components/SignInWith.js'

import reqAuth from './utils/requireAuth.js'
import actions from './redux/reducer'


const AppContext = React.createContext()


if(localStorage.Auth) {
  // update localstorage
  actions.doSetUser(JSON.parse(localStorage.Auth))
  var _id = JSON.parse(localStorage.Auth)._id
  actions.getUser(_id).then((res) => {
    actions.doSetUser(res)
  })
 }
 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        article: {},
        articles: [],
        user: {},
        isAuthed: false,
        profile: {},
        appName: '',
        modalMode: false,
        ...actions
    }
  }

  render() {
    const pathname = window.location.pathname
    // console.log(this.state)
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          { !pathname.includes('editor') ? <Header /> : ''}
          
          <Switch>
            <Route exact path="/" component={Feed}/>
            <Route path="/profile/:id" component={Profile} />
            <Route path="/articleview" component={ArticleView} />
            <Route path="/editor" component={Editor}/>
            <Route path="**" component={Feed} />
          </Switch>
        </div>
      </AppContext.Provider>
    )
  }
}

export {App, AppContext}
