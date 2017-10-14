import { connect } from 'react-redux'
import Pseud from './Pseud'

const mapStateToProps = (state, ownProps) => {
  return { pseud: state.cache.pseuds[ownProps.pseud] }
}

const mapDispatchToProps = dispatch => {
  return { } // TODO
}

export default connect(mapStateToProps, mapDispatchToProps)(Pseud)
