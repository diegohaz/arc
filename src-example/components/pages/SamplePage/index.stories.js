import React from 'react'
import { storiesOf } from '@storybook/react'
import { SamplePage } from 'components'

storiesOf('SamplePage', module)
  .add('default', () => (
    <SamplePage />
  ))
