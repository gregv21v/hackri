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
    this.setState({
      fullname: this.props.userInfo["name"],
      picture: this.props.userInfo.picture.data.url
    })
  }

  render () {
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
