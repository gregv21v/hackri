import React, { Component } from 'react'
import Navbar from './Navbar'
import Calendar from './Calendar'

export default class User extends Component {
  constructor () {
    super()

    this.state = {
      fullname: null,
      picture: null
    }
  }

  componentDidMount () {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '187246443953',
        cookie: true,
        xfmbl: true,
        version: 'v2.2'
      });
    },

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    this.setState({
      fullname: this.props.userInfo["name"],
      picture: this.props.userInfo.picture.data.url
    })
  }

  // testAPI () {
  //   FB.api('/me?access_token=' + , function(response) {
  //     console.log('Successful login for: ', response)
  //   });
  // }

  render () {
    console.log(this.props.userInfo)
    return (
      <div>
        <nav className="navbar navbar-default">
          <a className="navbar-brand" href="#">DE</a>
          <ul className="nav navbar-nav navbar-right">
            <li><p>{this.state.fullname}</p></li>
            <li><img src={this.state.picture}/></li>
          </ul>
        </nav>
        <Calendar/>
      </div>
    )
  }
}

export default User
