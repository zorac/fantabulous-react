import React, { Component } from 'react'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <div id="content">An error ocurred while loading this page :-(</div>
    } else {
      return <div id="content">{this.props.children}</div>
    }
  }
}

export default Page
