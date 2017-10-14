import React from 'react'
import { Link } from 'react-router-dom'

function Pseud(props) {
  var pseud = props.pseud

  if (pseud) {
    return (
      <Link to={'/pseuds/' + pseud.id} className="pseud">
        {pseud.name}
      </Link>
    )
  } else {
    return (
      <span className="pseud loading">Loading…</span>
    )
  }
}

export default Pseud
