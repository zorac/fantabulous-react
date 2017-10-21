import React, { Component } from 'react'
import Page from '../Page'
import Works from './WorksLoader'

class WorksPage extends Component {
  render() {
    return (
      <Page>
        <div className="works">
          <Works workIds={[1,2,3,4,5,6,7,8,9,10]}/>
        </div>
      </Page>
    )
  }
}

export default WorksPage
