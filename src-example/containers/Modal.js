import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromModal } from 'store/selectors'
import { modalHide } from 'store/actions'

import { Modal } from 'components'

const ModalContainer = props => <Modal {...props} />

ModalContainer.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
}

const mapStateToProps = (state, { name, isOpen }) => ({
  isOpen: isOpen || fromModal.isOpen(state, name),
})

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
