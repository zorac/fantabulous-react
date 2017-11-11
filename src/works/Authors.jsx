import React from 'react'
import Pseud from '../users/PseudFromCache'

function Authors(props) {
  let ids = props.pseudIds

  if (ids && (ids.length > 0)) {
    let last = ids.length - 1

    return (
      <span className="authors">{props.pseudIds.map((id, index) => [
        ((index === 0) ? null : (index === last) ? ' & ' : ', '),
        <Pseud key={id} pseud={id}/>
      ])}</span>
    )
  } else {
    return null
  }
}

export default Authors
