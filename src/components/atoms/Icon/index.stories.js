import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="close" />
  ))
  .add('color', () => (
    <Icon icon="close" color="primary" />
  ))
  .add('color reverse', () => (
    <Icon icon="close" color="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="close" height={100} />
  ))
