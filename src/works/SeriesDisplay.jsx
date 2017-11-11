import React from 'react'
import Page from '../Page'
import Works from './WorksLoader'

function SeriesDisplay(props) {
  let series = props.series

  if (!series) return <Page></Page>

  return (
    <Page>
      <h1>{series.name}</h1>
      <div className="works">
        <Works workIds={series.workIds}/>
      </div>
    </Page>
  )
}

export default SeriesDisplay
