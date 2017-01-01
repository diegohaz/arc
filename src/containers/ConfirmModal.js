import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { modalHide } from 'store/actions'

import { ConfirmModal } from 'components'

class ConfirmModalContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    return <ConfirmModal {...this.props} />
  }
}

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name))
})

export default connect(undefined, mapDispatchToProps)(ConfirmModalContainer)
