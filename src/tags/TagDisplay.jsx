import React from 'react'
import Page from '../Page'
import Tag from './Tag'

function TagDisplay(props) {
  return (
    <Page>
      <Tag tag={props.tag}/>
    </Page>
  )
}

export default TagDisplay
