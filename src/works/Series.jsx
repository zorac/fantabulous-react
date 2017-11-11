import React from 'react'
import { Link } from 'react-router-dom'

function Series(props) {
  let series = props.series

  if (series) {
    let prevNext = props.prevNext
    let workIds = series.workIds
    let index = workIds.indexOf(props.workId)
    let last = workIds.length - 1

    return (
      <span className="series">
        {(prevNext && (index > 0)) &&
          <span className="seriesPrev">
            <Link to={'/works/' + workIds[index - 1]}>
              Prevous work
            </Link>{' - '}
          </span>
        }
        Part {index + 1} of the <Link to={'/series/' + series.id} className="series">
          {series.name}
        </Link> series
        {(prevNext && (index < last)) &&
          <span className="seriesNext">
            {' - '}<Link to={'/works/' + workIds[index + 1]}>
              Next work
            </Link>
          </span>
        }
      </span>
    )
  } else {
    return (
      <span className="series loading">Loading…</span>
    )
  }
}

export default Series
