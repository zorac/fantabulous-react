import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authors from './Authors'
import SeriesList from './SeriesList'
import Tags from '../tags/Tags'
import './Work.css'

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    let hasError = this.state.hasError
    let work = this.props.work

    if (hasError) {
      return (
        <div className="work placeholder error">
          Something went wrong :-(
        </div>
      )
    } else if (work) {
      let tags = work.tagIds;

      return (
        <div className="work">
          <div className="headline">
            <Link to={'/works/' + work.id} className="title">
              {work.name}
            </Link> by <Authors pseudIds={work.pseudIds}/>
          </div>
          <div className="fandoms">
            <Tags type="fandom" tagIds={tags.fandom}/>
          </div>
          <div className="tags">
            <Tags type="warning" tagIds={tags.warning}/>
            <Tags type="ship" tagIds={tags.ship}/>
            <Tags type="character" tagIds={tags.character}/>
            <Tags type="generic" tagIds={tags.generic}/>
          </div>
          <div className="serieses">
            <SeriesList seriesIds={work.seriesIds} workId={work.id}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="work placeholder loading">
          Loading…
        </div>
      )
    }
  }
}

export default Work
