import React from 'react'
import Page from '../Page'
import Work from './Work'

function WorkDisplay(props) {
  return (
    <Page>
      <Work work={props.work}/>
    </Page>
  )
}

export default WorkDisplay
