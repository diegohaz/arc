import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Slider } from 'components'

storiesOf('Slider', module)
  .add('default', () => (
    <Slider min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('reverse', () => (
    <Slider reverse min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('disabled', () => (
    <Slider disabled min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('transparent', () => (
    <Slider transparent min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .add('responsive with breakpoint', () => (
    <Slider min={0} max={10} step={0.05} defaultValue={5} breakpoint={450} responsive />
  ))
