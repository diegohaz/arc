import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fbAppId, googleClientId } from 'config'
import { fromSocial } from 'store/selectors'
import { socialLoginPrepare, socialLoginRequest, modalHide } from 'store/actions'

import { LoginModal } from 'components'

class LoginModalContainer extends Component {
  componentDidMount() {
    const { prepareGoogle, prepareFacebook } = this.props
    prepareGoogle()
    prepareFacebook()
  }

  render() {
    return <LoginModal {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromSocial.getUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  prepareGoogle: () => dispatch(socialLoginPrepare('google', { clientId: googleClientId })),
  prepareFacebook: () => dispatch(socialLoginPrepare('facebook', { clientId: fbAppId })),
  onFacebookLogin: () => dispatch(socialLoginRequest('facebook')),
  onGoogleLogin: () => dispatch(socialLoginRequest('google')),
  onClose: () => dispatch(modalHide('login')),
})

LoginModalContainer.propTypes = {
  prepareGoogle: PropTypes.func.isRequired,
  prepareFacebook: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
