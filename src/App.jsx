import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './home/Header'
import Footer from './home/Footer'
import Home from './home/Home'
import Works from './works/Works'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header/>
        <div id="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/works/" component={Works}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App
