import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../auth/Auth'
import MenuBar from './MenuBar'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1><Link to="/">Fantabulous</Link></h1>
        <Auth/>
        <MenuBar/>
      </div>
    )
  }
}

export default Header
