import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Label from '.'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Hello</Label>
  ))
  .add('reverse', () => (
    <Label reverse>Hello</Label>
  ))
