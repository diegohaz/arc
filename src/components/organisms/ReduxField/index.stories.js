import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReduxField } from 'components'

storiesOf('ReduxField', module)
  .add('default', () => (
    <ReduxField input={{ name: 'name' }} meta={{}} />
  ))
  .add('error', () => (
    <ReduxField input={{ name: 'name' }} meta={{ touched: true, error: 'Invalid' }} />
  ))
