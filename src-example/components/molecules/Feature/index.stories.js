import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Feature } from 'components'

storiesOf('Feature', module)
  .add('default', () => (
    <Feature title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with link', () => (
    <Feature title="ARc" link="https://github.com/diegohaz/arc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with icon', () => (
    <Feature icon="close" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
