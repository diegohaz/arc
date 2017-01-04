import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="arc" />
  ))
  .add('color', () => (
    <Icon icon="arc" color="primary" />
  ))
  .add('color reverse', () => (
    <Icon icon="arc" color="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="arc" height={100} />
  ))
