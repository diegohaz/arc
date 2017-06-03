import React from 'react'
import { storiesOf } from '@storybook/react'
import { Slider } from 'components'

storiesOf('Slider', module)
  .add('default', () => (
    <Slider />
  ))
  .add('reverse', () => (
    <Slider reverse min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('disabled', () => (
    <Slider disabled min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('responsive with breakpoint', () => (
    <Slider responsive min={0} max={10} step={0.05} defaultValue={5} breakpoint={450} />
  ))
