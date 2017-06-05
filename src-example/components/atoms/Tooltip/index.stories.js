import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '.'

storiesOf('Tooltip', module)
  .add('default', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('reverse', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello!" reverse>
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('position right', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="right">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('position bottom', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="bottom">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('position left', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="left">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('align start', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello! How are you?" align="start">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .add('align end', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello! How are you?" align="end">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
