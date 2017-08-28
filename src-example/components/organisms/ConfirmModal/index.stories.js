import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ConfirmModal } from 'components'

storiesOf('ConfirmModal', module)
  .add('default', () => (
    <ConfirmModal
      name="confirm"
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    />
  ))
  .add('different button labels', () => (
    <ConfirmModal
      name="confirm"
      confirmLabel="Foo"
      cancelLabel="Bar"
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    />
  ))
  .add('different button props', () => (
    <ConfirmModal
      name="confirm"
      confirmLabel="Remove"
      confirmProps={{ color: 'danger' }}
      cancelProps={{ color: 'grayscale' }}
      onConfirm={action('confirmed')}
      onClose={action('closed')}
      isOpen
    >
      Do you really want to remove it?
    </ConfirmModal>
  ))
