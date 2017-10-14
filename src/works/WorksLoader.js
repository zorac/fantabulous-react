import { connect } from 'react-redux'
import Works from './Works'
import { loadWorks } from '../data/cacheActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadWorks(ownProps.workIds))
  return { }
}

export default connect(null, mapDispatchToProps)(Works)
