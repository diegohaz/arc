import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Organism } from 'components'

storiesOf('Organism', module)
  .add('default', () => (
    <Organism>Hello</Organism>
  ))
  .add('reverse', () => (
    <Organism reverse>Hello</Organism>
  ))
