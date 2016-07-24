import React, { PropTypes, Component } from 'react'
import FacebookLogin from 'react-facebook-login'
require('../main.css')

const Home = () => {
  return (
    <div className="wrapper">
      <div className="main-text">
        <h1>Discovery</h1>
        <ul>
          <li>Life</li>
          <li>Joy</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="bg">
        <video className="bg-video" src="https://s3-us-west-2.amazonaws.com/coverr/mp4/Coverr-Lulu.mp4" autoPlay loop></video>
      </div>
    </div>
  )
}

export default Home
