import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Modal } from 'components'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal onClose={action('closed')} isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('with title', () => (
    <Modal onClose={action('closed')} title="Hello" isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('closeable', () => (
    <Modal onClose={action('closed')} closeable isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('reverse', () => (
    <Modal onClose={action('closed')} reverse isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
