import React from 'react'
import { storiesOf } from '@storybook/react'
import { Organism } from 'components'

storiesOf('Organism', module)
  .add('default', () => (
    <Organism />
  ))
  .add('reverse', () => (
    <Organism reverse />
  ))
