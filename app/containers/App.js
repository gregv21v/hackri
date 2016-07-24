import React, { Component } from 'react'
import Home from '../components/Home'
import FacebookLogin from 'react-facebook-login';
require('../main.css')

export default class App extends Component {
  constructor (context) {
    super(context)

    this.state = {
      userInfo: null,
      loggedIn: false,
      display: 'block'
    }

    this.handleClick = this.handleClick.bind(this)
    this.userProfile = this.userProfile.bind(this)
  }

  componentDidMount () {
    this.setState({
      display: 'block'
    })
  }

  handleClick (response) {
    if (response !== null) {
      this.setState({
        userInfo: response,
        loggedIn: true
      })
    }
    this.userProfile()
  }

  userProfile () {
    if (this.state.loggedIn) {
      this.context.router.push({
        pathname: '/user/' + this.state.userInfo.accessToken
      })
      this.setState({
        userInfo: null,
        userAuth: false,
        display: 'none'
      })
    }
  }

  render () {
    const displayBtn = {
      display: this.state.display
    }
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        userInfo: this.state.userInfo
      })
    })
    return (
      <div>
        {children}
        <div className="btn-pos">
          <div className="btn-login" style={displayBtn}>
            <FacebookLogin
              appId="187246443953"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.handleClick} />
           </div>
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}
