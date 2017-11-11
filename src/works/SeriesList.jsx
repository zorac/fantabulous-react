import React from 'react'
import Series from './SeriesFromCache'

function SeriesList(props) {
  let ids = props.seriesIds;

  if (ids && (ids.length > 0)) {
    return ids.map((id, index) => [
      ((index > 0) && ', '),
      <Series key={id} seriesId={id} workId={props.workId} prevNext={props.prevNext}/>
    ])
  } else {
    return null;
  }
}

export default SeriesList
