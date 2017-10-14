import { connect } from 'react-redux'
import { loadTags } from '../data/cacheActions'
import TagDisplay from './TagDisplay'

const mapStateToProps = (state, ownProps) => {
  return { tag: state.cache.tags[ownProps.match.params.tagId] }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadTags([ownProps.match.params.tagId]))
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDisplay)
