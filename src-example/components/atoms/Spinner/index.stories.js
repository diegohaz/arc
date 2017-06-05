import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from '.'

storiesOf('Spinner', module)
  .add('default', () => (
    <Spinner />
  ))
  .add('reverse', () => (
    <Spinner reverse />
  ))
  .add('another palette', () => (
    <Spinner palette="secondary" />
  ))
