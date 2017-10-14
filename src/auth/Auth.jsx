import React, { Component } from 'react'

class Auth extends Component {
  render() {
    const user = this.props.auth.user;
    const inProgress = this.props.auth.inProgress;
    const onLogoutClick = this.props.onLogout;
    const onLoginSubmit = e => {
      e.preventDefault()
      this.props.onLogin(this.usernameInput.value, this.passwordInput.value)
    }

    if (user) {
      return (
        <span className="auth">
          <span>Hi, {user.name}!</span>
          <button onClick={onLogoutClick} disabled={inProgress}>Log Out</button>
        </span>
      )
    } else {
      return (
        <form className="auth" onSubmit={onLoginSubmit}>
          <input name="username" placeholder="Username"
            ref={(input) => { this.usernameInput = input }}/>
          <input name="password" type="password" placeholder="Password"
            ref={(input) => { this.passwordInput = input }}/>
          <button type="submit" disabled={inProgress}>Log In</button>
        </form>
      )
    }
  }
}

export default Auth
