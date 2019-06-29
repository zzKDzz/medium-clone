import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '../App'



// console.log(AppContext)
// export default function(SomeComponent){
  // class Authenticate extends Component{
  //   // componentWillMount(){
  //   //   if(!this.props.isAuth)
  //   //     this.context.history.push('/')
  //   // }
  //   render(){
  //     return(
  //       <SomeComponent {...this.props} />
  //     )
  //   }
  // }
  // Authenticate.contextTypes = {
  //   router: PropTypes.object.isRequired
  // }

  // const mapStateTopProps = state => {
  //   return({isAuth: state.authUser.isAuth})
  // }
  //return 
  // Todo: to be completed without redux
// }

export default function(SomeComponent){

  // function checkAndRender(SomeComponent){}

  class Authenticate extends Component{
    render(){
      return(
        <SomeComponent {...this.props} />
      )
    }
  }
  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  return (
    <AppContext.Consumer>
      {
        ({authUser}) => {
          if(!authUser.isAuth)
            this.context.history.push('/')
          else
            return(<Authenticate />)
        }
      }
    </AppContext.Consumer>
)
}