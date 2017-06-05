import React from 'react'
import { storiesOf } from '@storybook/react'
import Atom from '.'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom>Hello</Atom>
  ))
  .add('reverse', () => (
    <Atom reverse>Hello</Atom>
  ))
