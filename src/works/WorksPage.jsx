import React, { Component } from 'react'
import Works from './WorksLoader'

class WorksPage extends Component {
  render() {
    return (
      <div className="works">
        <Works workIds={[1,2,3,4,5,6,7,8,9,10]}/>
      </div>
    )
  }
}

export default WorksPage
