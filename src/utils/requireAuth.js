import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '/index.js'

// export default function(SomeComponent){
  class Authenticate extends Component{
    // componentWillMount(){
    //   if(!this.props.isAuth)
    //     this.context.history.push('/')
    // }
    render(){
      return(
        <SomeComponent {...this.props} />
      )
    }
  }
  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  // const mapStateTopProps = state => {
  //   return({isAuth: state.authUser.isAuth})
  // }
  //return 
  // Todo: to be completed without redux
// }

export default function(SomeComponent){

  // function checkAndRender(SomeComponent){}

  return (
    <AppContext.Consumer>
      {
        ({authUser}) => {
          if(!authUser.isAuth)
            this.context.history.push('/')
          else
            <Authenticate />
        }
      }
    </AppContext.Consumer>
)
}