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

class App extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      <div className="App">
        { !pathname.includes('editor') ? <Header /> : ''}
        <SignInWith />
        <Switch>
          <Route exact path="/" component={Feed}/>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/articleview" component={ArticleView} />
          <Route path="/editor" component={Editor}/>
          <Route path="**" component={Feed} />
        </Switch>
      </div>
    )
  }
}

export default App
