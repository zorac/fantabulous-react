import React from 'react'
import Tag from './TagFromCache'

function Tags(props) {
  let ids = props.tagIds

  if (ids && (ids.length > 0)) {
    return props.tagIds.map((tag, index) =>
      <Tag key={tag} tag={tag}/>
    )
  } else {
    return null;
  }
}

export default Tags
