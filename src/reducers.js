import { combineReducers } from 'redux'
import auth from './auth/reducers'

function cache(state = {}, action) {
  return state;
}

const fantabulousApp = combineReducers({
  auth,
  cache
})

export default fantabulousApp
