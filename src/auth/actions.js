import { LOGIN, LOGOUT, SWITCH_PSEUD, AUTH_IN_PROGRESS } from '../actions'

function doLogin(user, pseud) {
  return { type: LOGIN, user, pseud }
}

function doLogout() {
  return { type: LOGOUT }
}

function doPseud(pseud) {
  return { type: SWITCH_PSEUD, pseud }
}

function doProgress(action) {
  return { type: AUTH_IN_PROGRESS, action }
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(doProgress(LOGIN))
    fetch('/api/login', {
      method: 'POST',
      body: new URLSearchParams({ username, password })
    }).then(
      response => response.json()
    ).then(
      json => dispatch(doLogin(json, null)),
    )
  }
}

export function logout() {
  return function(dispatch) {
    dispatch(doProgress(LOGOUT))
    fetch('/api/login', {
      method: 'DELETE'
    }).then(
      response => dispatch(doLogout())
    )
  }
}

export function switchPseud(pseud) {
  return function(dispatch) {
    dispatch(doProgress(SWITCH_PSEUD))
    fetch('/api/login', {
      method: 'PUT',
      body: new URLSearchParams({ pseud })
    }).then(
      response => dispatch(doPseud(response.json()))
    )
  }
}
