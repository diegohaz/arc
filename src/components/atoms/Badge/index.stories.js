import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Badge from '.'

storiesOf('Badge', module)
  .add('default', () => (
    <Badge>Hello</Badge>
  ))
  .add('reverse', () => (
    <Badge reverse>Hello</Badge>
  ))
  .add('another color', () => (
    <Badge color="secondary">Hello</Badge>
  ))
