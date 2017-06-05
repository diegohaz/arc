import React from 'react'
import { storiesOf } from '@storybook/react'
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
  .add('with code', () => (
    <Feature code="npm run build" title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with soon', () => (
    <Feature soon title="ARc">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
