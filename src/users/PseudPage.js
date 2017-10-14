import { connect } from 'react-redux'
import { loadPseuds } from '../data/cacheActions'
import PseudDisplay from './PseudDisplay'

const mapStateToProps = (state, ownProps) => {
  return { pseud: state.cache.pseuds[ownProps.match.params.pseudId] }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadPseuds([ownProps.match.params.pseudId]))
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(PseudDisplay)
