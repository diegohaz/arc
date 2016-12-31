import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fbAppId, googleClientId } from 'config'
import { fromSocial } from 'store/selectors'
import { socialLogin, modalHide } from 'store/actions'

import { LoginModal } from 'components'

class LoginModalContainer extends Component {
  static propTypes = {
    prepareGoogle: PropTypes.func.isRequired,
    prepareFacebook: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.prepareGoogle()
    this.props.prepareFacebook()
  }

  render () {
    return <LoginModal {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromSocial.getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  prepareGoogle: () => dispatch(socialLogin.prepare('google', { client_id: googleClientId })),
  prepareFacebook: () => dispatch(socialLogin.prepare('facebook', { appId: fbAppId })),
  onFacebookLogin: () => dispatch(socialLogin.request('facebook')),
  onGoogleLogin: () => dispatch(socialLogin.request('google')),
  onClose: () => dispatch(modalHide('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
