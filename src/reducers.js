import { combineReducers } from 'redux'
import auth from './auth/authReducers'
import cache from './data/cacheReducers'

const reducers = combineReducers({
  auth,
  cache
})

export default reducers
