import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authors from './Authors'
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
            </Link>
            <Authors pseudIds={work.pseudIds}/>
          </div>
          <Tags tagIds={tags.fandom}/>
          <Tags tagIds={[...tags.warning, ...tags.ship, ...tags.character, ...tags.generic]}/>
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
