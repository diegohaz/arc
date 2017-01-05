import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SamplePage } from 'components'

storiesOf('SamplePage', module)
  .add('default', () => (
    <SamplePage />
  ))
