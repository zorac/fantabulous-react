import React from 'react'
import { Link } from 'react-router-dom'

function Tag(props) {
  var tag = props.tag

  if (tag) {
    return (
      <Link to={'/tags/' + tag.id} className={'tag ' + tag.type}>
        {tag.name}
      </Link>
    )
  } else {
    return (
      <span className="tag loading">Loading…</span>
    )
  }
}

export default Tag
