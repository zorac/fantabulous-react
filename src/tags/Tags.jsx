import React from 'react'
import Tag from './TagFromCache'

function Tags(props) {
  let ids = props.tagIds

  if (ids && (ids.length > 0)) {
    return (
      <div className="tags">{props.tagIds.map((tag, index) => [
        ((index > 0) ? ' ' : null),
        <Tag key={tag} tag={tag}/>
      ])}</div>
    )
  } else {
    return null;
  }
}

export default Tags
