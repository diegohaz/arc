import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from '.'

storiesOf('Paragraph', module)
  .add('default', () => (
    <Paragraph>
      Nisi eu eiusmod cupidatat aute laboris commodo excepteur esse dolore incididunt incididunt aliquip pariatur est minim officia sit. Nulla pariatur duis duis quis commodo cupidatat voluptate enim culpa elit adipisicing do cupidatat sint anim. Cillum elit magna occaecat proident sit cupidatat ad quis sunt id culpa culpa. Ad duis nulla in incididunt amet consequat officia ad voluptate voluptate. Pariatur eiusmod ullamco cupidatat non magna officia aute magna deserunt qui aute dolor eu. Qui amet non ex cillum sunt ad velit consequat ipsum velit.
    </Paragraph>
  ))
  .add('reverse', () => (
    <Paragraph reverse>
      Nisi eu eiusmod cupidatat aute laboris commodo excepteur esse dolore incididunt incididunt aliquip pariatur est minim officia sit. Nulla pariatur duis duis quis commodo cupidatat voluptate enim culpa elit adipisicing do cupidatat sint anim. Cillum elit magna occaecat proident sit cupidatat ad quis sunt id culpa culpa. Ad duis nulla in incididunt amet consequat officia ad voluptate voluptate. Pariatur eiusmod ullamco cupidatat non magna officia aute magna deserunt qui aute dolor eu. Qui amet non ex cillum sunt ad velit consequat ipsum velit.
    </Paragraph>
  ))
