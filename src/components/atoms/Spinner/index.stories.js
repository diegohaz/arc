import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Spinner from '.'

storiesOf('Spinner', module)
  .add('default', () => (
    <Spinner />
  ))
  .add('reverse', () => (
    <Spinner reverse />
  ))
  .add('another color', () => (
    <Spinner color="secondary" />
  ))
