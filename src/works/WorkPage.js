import { connect } from 'react-redux'
import { loadWorks } from '../data/cacheActions'
import WorkDisplay from './WorkDisplay'

const mapStateToProps = (state, ownProps) => {
  return { work: state.cache.works[ownProps.match.params.workId] }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadWorks([ownProps.match.params.workId]))
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkDisplay)
