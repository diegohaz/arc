import React from 'react'
import { storiesOf } from '@storybook/react'
import { Blockquote } from 'components'

storiesOf('Blockquote', module)
  .add('default', () => (
    <Blockquote>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Blockquote>
  ))
  .add('reverse', () => (
    <Blockquote reverse>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Blockquote>
  ))
  .add('with cite', () => (
    <Blockquote cite="Foo">
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Blockquote>
  ))
