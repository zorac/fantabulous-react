import { LOGIN, LOGOUT, SWITCH_PSEUD, AUTH_IN_PROGRESS } from '../actions'

function authReducer(state = { }, action) {
  switch(action.type) {
    case LOGIN:
      return {
        user: action.user,
        pseud: action.pseud
      }
    case LOGOUT:
      return { }
    case SWITCH_PSEUD:
      return {
        user: state.user,
        pseud: action.pseud
      }
    case AUTH_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.action
      }
    default:
      return state
  }
}

export default authReducer
