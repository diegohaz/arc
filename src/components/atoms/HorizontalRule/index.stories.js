import React from 'react'
import { storiesOf } from '@kadira/storybook'
import HorizontalRule from '.'

storiesOf('HorizontalRule', module)
  .add('default', () => (
    <HorizontalRule />
  ))
  .add('color', () => (
    <HorizontalRule color="primary" />
  ))
  .add('color reverse', () => (
    <HorizontalRule color="primary" reverse />
  ))
