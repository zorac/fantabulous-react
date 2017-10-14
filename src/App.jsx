import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './home/Header'
import Footer from './home/Footer'
import HomePage from './home/HomePage'
import PseudPage from './users/PseudPage'
import TagPage from './tags/TagPage'
import WorksPage from './works/WorksPage'
import WorkPage from './works/WorkPage'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header/>
        <div id="content">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/pseuds/:pseudId" component={PseudPage}/>
            <Route path="/tags/:tagId" component={TagPage}/>
            <Route path="/works/:workId" component={WorkPage}/>
            <Route path="/works/" component={WorksPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App
