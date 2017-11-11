import React from 'react'
import Page from '../Page'
import Authors from './Authors'
import SeriesList from './SeriesList'
import Tags from '../tags/Tags'

function WorkDisplay(props) {
  let work = props.work

  if (!work) return <Page></Page>

  let tags = work.tagIds

  return (
    <Page>
      <div className="work">
        <table><tbody>
          <tr><th>Archive Warnings:</th><td><Tags tagIds={tags.warning}/></td></tr>
          <tr><th>Fandoms:</th><td><Tags tagIds={tags.fandom}/></td></tr>
          <tr><th>Relationships:</th><td><Tags tagIds={tags.ship}/></td></tr>
          <tr><th>Characters:</th><td><Tags tagIds={tags.character}/></td></tr>
          <tr><th>Additional Tags:</th><td><Tags tagIds={tags.generic}/></td></tr>
          <tr><th>Series:</th><td><SeriesList seriesIds={work.seriesIds} workId={work.id} prevNext={true}/></td></tr>
        </tbody></table>
      </div>
      <h1>{work.name}</h1>
      <h2><Authors pseudIds={work.pseudIds}/></h2>
    </Page>
  )
}

export default WorkDisplay
