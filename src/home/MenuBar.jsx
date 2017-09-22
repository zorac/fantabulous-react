import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
  render() {
    return (
      <div className="menuBar">
        <Link to="/works/">Works</Link>
      </div>
    )
  }
}

export default MenuBar
