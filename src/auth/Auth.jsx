import React, { Component } from 'react'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' } // TODO saved username?
  }
  render() {
    const user = this.props.auth.user;
    const inProgress = this.props.auth.inProgress;

    if (user) {
      const onLogoutClick = this.props.onLogout;

      return (
        <span className="auth">
          <span>Hi, {user.name}!</span>
          <button onClick={onLogoutClick} disabled={inProgress}>Log Out</button>
        </span>
      )
    } else {
      const onUsernameChange = event => {
        this.setState({ username: event.target.value })
      }
      const onPasswordChange = event => {
        this.setState({ password: event.target.value })
      }
      const onLoginSubmit = event => {
        event.preventDefault()
        this.props.onLogin(this.state.username, this.state.password)
      }

      return (
        <form className="auth" onSubmit={onLoginSubmit}>
          <input name="username" placeholder="Username"
            value={this.state.username} onChange={onUsernameChange}/>
          <input name="password" type="password" placeholder="Password"
            value={this.state.password} onChange={onPasswordChange}/>
          <button type="submit" disabled={inProgress}>Log In</button>
        </form>
      )
    }
  }
}

export default Auth
