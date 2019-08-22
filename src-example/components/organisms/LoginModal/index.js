import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconButton } from 'components'
import { Modal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`
class LoginModal extends Component {
  componentWillReceiveProps(nextProps) {
    const { user, onClose } = this.props
    if (!user && nextProps.user) {
      onClose()
    }
  }

  render() {
    const { onFacebookLogin, onGoogleLogin, ...props } = this.props
    return (
      <Modal title="Login" name="login" closeable {...props}>
        <Wrapper>
          <IconButton onClick={onFacebookLogin} icon="facebook">Connect with Facebook</IconButton>
          <IconButton onClick={onGoogleLogin} icon="google">Connect with Google</IconButton>
        </Wrapper>
      </Modal>
    )
  }
}

LoginModal.propTypes = {
  user: PropTypes.object,
  onFacebookLogin: PropTypes.func.isRequired,
  onGoogleLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LoginModal
