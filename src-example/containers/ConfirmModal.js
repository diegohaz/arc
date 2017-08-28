import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { modalHide } from 'store/actions'

import { ConfirmModal } from 'components'

const ConfirmModalContainer = props => <ConfirmModal {...props} />

ConfirmModalContainer.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch, { name }) => ({
  onClose: () => dispatch(modalHide(name)),
})

export default connect(undefined, mapDispatchToProps)(ConfirmModalContainer)
