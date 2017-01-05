import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromModal } from 'store/selectors'
import { modalHide } from 'store/actions'

import { Modal } from 'components'

class ModalContainer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isOpen: PropTypes.bool
  }

  render () {
    return <Modal {...this.props} />
  }
}

const mapStateToProps = (state, { name, isOpen }) => ({
  isOpen: isOpen || fromModal.isOpen(state, name)
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
