import { connect } from 'react-redux'
import { login, logout } from './actions'
import AuthUI from './AuthUI'

const mapStateToProps = state => {
  return { auth: state.auth }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username,password) => {
      dispatch(login(username,password))
    },
    onLogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthUI)
