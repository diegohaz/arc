import React from 'react'
import { storiesOf } from '@storybook/react'
import { Molecule } from 'components'

storiesOf('Molecule', module)
  .add('default', () => (
    <Molecule>Hello</Molecule>
  ))
  .add('reverse', () => (
    <Molecule reverse>Hello</Molecule>
  ))
