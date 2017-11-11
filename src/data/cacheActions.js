import {
  CACHE_LOADED_PSEUDS,
  CACHE_LOADED_SERIES,
  CACHE_LOADED_TAGS,
  CACHE_LOADED_WORKS,
} from '../actions'

function doPseudsLoaded(pseuds) {
  return { type: CACHE_LOADED_PSEUDS, pseuds }
}

function doSeriesLoaded(series) {
  return { type: CACHE_LOADED_SERIES, series }
}

function doTagsLoaded(tags) {
  return { type: CACHE_LOADED_TAGS, tags }
}

function doWorksLoaded(works) {
  return { type: CACHE_LOADED_WORKS, works }
}

export function loadPseuds(pseudIds) {
  return function(dispatch, getState) {
    var pseuds = getState().cache.pseuds
    var missing = pseudIds.filter(id => !pseuds.hasOwnProperty(id))

    if (missing.length > 0) {
      // TODO loading
      fetch('/api/pseud/ids/' + pseudIds.join()).then(
        // TODO handle non-200
        response => response.json()
      ).then(
        pseuds => dispatch(doPseudsLoaded(pseuds))
      )
      /// TODO catch, end loading
    }
  }
}

export function loadSeries(seriesIds) {
  return function(dispatch, getState) {
    var series = getState().cache.series
    var missing = seriesIds.filter(id => !series.hasOwnProperty(id))

    if (missing.length > 0) {
      // TODO loading
      fetch('/api/series/ids/' + seriesIds.join()).then(
        // TODO handle non-200
        response => response.json()
      ).then(
        series => dispatch(doSeriesLoaded(series))
      )
      /// TODO catch, end loading
    }
  }
}

export function loadTags(tagIds) {
  return function(dispatch, getState) {
    var tags = getState().cache.tags
    var missing = tagIds.filter(id => !tags.hasOwnProperty(id))

    if (missing.length > 0) {
      // TODO loading
      fetch('/api/tag/ids/' + tagIds.join()).then(
        // TODO handle non-200
        response => response.json()
      ).then(
        tags => dispatch(doTagsLoaded(tags))
      )
      /// TODO catch, end loading
    }
  }
}

export function loadWorks(workIds) {
  return function(dispatch, getState) {
    var works = getState().cache.works
    var missing = workIds.filter(id => !works.hasOwnProperty(id))

    if (missing.length > 0) {
      // TODO loading
      fetch('/api/work/ids/' + workIds.join()).then(
        // TODO handle non-200
        response => response.json()
      ).then(
        works => {
          dispatch(doWorksLoaded(works))

          var pseuds = new Set()
          var series = new Set()
          var tags = new Set()

          works.forEach(work => {
            work.pseudIds.forEach(
              id => pseuds.add(id))
            work.seriesIds.forEach(
              id => series.add(id))
            Object.values(work.tagIds).forEach(
              ids => ids.forEach(
                id => tags.add(id)))
          })

          dispatch(loadPseuds([...pseuds]))
          dispatch(loadSeries([...series]))
          dispatch(loadTags([...tags]))
        }
      )
      /// TODO catch, end loading
    }
  }
}
