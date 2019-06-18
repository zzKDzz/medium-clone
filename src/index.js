import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// import {store, history } from './redux/store'
import {Router, Route} from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import reducer from './redux/reducer'
console.log(reducer)

const AppContext = React.createContext()

ReactDOM.render(
  <AppContext.Provider value={reducer}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </AppContext.Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
modules.export = {AppContext}