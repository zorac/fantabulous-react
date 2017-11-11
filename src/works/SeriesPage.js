import { connect } from 'react-redux'
import { loadSeries } from '../data/cacheActions'
import SeriesDisplay from './SeriesDisplay'

const mapStateToProps = (state, ownProps) => {
  return { series: state.cache.series[ownProps.match.params.seriesId] }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadSeries([ownProps.match.params.seriesId]))
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesDisplay)
