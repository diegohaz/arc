import React from 'react'
import { storiesOf } from '@storybook/react'
import Caption from '.'

storiesOf('Caption', module)
  .add('default', () => (
    <Caption>Hello</Caption>
  ))
  .add('reverse', () => (
    <Caption reverse>Hello</Caption>
  ))
