import React, { Component } from 'react'


export default class User extends Component {
  constructor () {
    super()

    this.state = {
      fullname: '',
      picture: ''
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
      <h1>{this.state.fullname}</h1>
    )
  }
}

export default User
