import React from 'react'
import { Link } from 'react-router-dom'
import Authors from './Authors'
import Tags from '../tags/Tags'

function Work(props) {
  var work = props.work

  if (work) {
    return (
      <div className="work">
        <div className="headline">
          <Link to={'/works/' + work.id} className="title">
            {work.name}
          </Link>
          <Authors pseudIds={work.pseudIds}/>
        </div>
        <Tags tagIds={work.tagIds}/>
      </div>
    )
  } else {
    return (
      <div className="work loading">
        Loading…
      </div>
    )
  }
}

export default Work
