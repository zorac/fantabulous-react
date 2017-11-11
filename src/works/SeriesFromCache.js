import { connect } from 'react-redux'
import Series from './Series'

const mapStateToProps = (state, ownProps) => {
  return { series: state.cache.series[ownProps.seriesId] }
}

export default connect(mapStateToProps)(Series)
