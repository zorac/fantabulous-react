import { connect } from 'react-redux'
import Tag from './Tag'

const mapStateToProps = (state, ownProps) => {
  return { tag: state.cache.tags[ownProps.tag] }
}

const mapDispatchToProps = dispatch => {
  return { } // TODO
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag)
