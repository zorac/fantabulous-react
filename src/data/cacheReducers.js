import {
  CACHE_LOADED_PSEUDS,
  CACHE_LOADED_SERIES,
  CACHE_LOADED_TAGS,
  CACHE_LOADED_WORKS,
} from '../actions'

const EMPTY_CACHE = {
  pseuds: { },
  series: { },
  tags: { },
  users: { },
  works: { },
}

function cacheReducer(state = EMPTY_CACHE, action) {
  switch(action.type) {
    case CACHE_LOADED_PSEUDS:
      let pseuds = { ...state.pseuds }

      action.pseuds.forEach(function(pseud) {
        pseuds[pseud.id] = pseud
      })

      return { ...state, pseuds }
    case CACHE_LOADED_SERIES:
      let series = { ...state.series }

      action.series.forEach(function(s) {
        series[s.id] = s
      })

      return { ...state, series }
    case CACHE_LOADED_TAGS:
      let tags = { ...state.tags }

      action.tags.forEach(function(tag) {
        tags[tag.id] = tag
      })

      return { ...state, tags }
    case CACHE_LOADED_WORKS:
      let works = { ...state.works }

      action.works.forEach(function(work) {
        works[work.id] = work
      })

      return { ...state, works }
    default:
      return state
  }
}

export default cacheReducer
