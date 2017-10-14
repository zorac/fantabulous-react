import { connect } from 'react-redux'
import Work from './Work'

const mapStateToProps = (state, ownProps) => {
  return { work: state.cache.works[ownProps.workId] }
}

export default connect(mapStateToProps)(Work)
