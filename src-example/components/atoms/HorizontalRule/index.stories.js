import React from 'react'
import { storiesOf } from '@storybook/react'
import HorizontalRule from '.'

storiesOf('HorizontalRule', module)
  .add('default', () => (
    <HorizontalRule />
  ))
  .add('palette', () => (
    <HorizontalRule palette="primary" />
  ))
  .add('palette reverse', () => (
    <HorizontalRule palette="primary" reverse />
  ))
