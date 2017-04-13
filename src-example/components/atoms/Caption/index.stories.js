import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Caption from '.'

storiesOf('Caption', module)
  .add('default', () => (
    <Caption>Hello</Caption>
  ))
  .add('reverse', () => (
    <Caption reverse>Hello</Caption>
  ))
