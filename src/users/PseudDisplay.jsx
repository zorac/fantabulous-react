import React from 'react'
import Page from '../Page'
import Pseud from './Pseud'

function PseudDisplay(props) {
  return (
    <Page>
      <Pseud pseud={props.pseud}/>
    </Page>
  )
}

export default PseudDisplay
