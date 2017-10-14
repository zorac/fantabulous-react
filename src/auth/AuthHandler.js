import { connect } from 'react-redux'
import { login, logout } from './authActions'
import Auth from './Auth'

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

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
