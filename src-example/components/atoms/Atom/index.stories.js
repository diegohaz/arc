import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Atom from '.'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom>Hello</Atom>
  ))
  .add('reverse', () => (
    <Atom reverse>Hello</Atom>
  ))
