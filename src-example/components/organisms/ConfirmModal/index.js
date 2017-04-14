import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'components'
import { Modal } from 'containers'

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  > *:first-child {
    margin-right: 0.5rem;
  }
`

const ConfirmModal = ({
  children,
  onConfirm,
  onClose,
  confirmLabel,
  cancelLabel,
  confirmProps,
  cancelProps,
  ...props
}) => {
  return (
    <Modal {...props}>
      {children || 'Do you want to proceed?'}
      <Options>
        <Button onClick={onConfirm} {...confirmProps}>{confirmLabel}</Button>
        <Button onClick={onClose} transparent {...cancelProps}>{cancelLabel}</Button>
      </Options>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmProps: PropTypes.object,
  cancelProps: PropTypes.object,
}

ConfirmModal.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  confirmProps: {},
  cancelProps: {},
}

export default ConfirmModal
