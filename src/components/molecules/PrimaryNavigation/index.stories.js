import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PrimaryNavigation } from 'components'

storiesOf('PrimaryNavigation', module)
  .add('default', () => (
    <PrimaryNavigation />
  ))
  .add('reverse', () => (
    <PrimaryNavigation reverse />
  ))
