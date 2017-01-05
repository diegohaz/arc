import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from '.'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('reverse', () => (
    <Input reverse />
  ))
  .add('height', () => (
    <Input height={100} />
  ))
  .add('invalid', () => (
    <Input invalid />
  ))
  .add('type textarea', () => (
    <Input type="textarea" />
  ))
  .add('type checkbox', () => (
    <Input type="checkbox" />
  ))
  .add('type radio', () => (
    <Input type="radio" />
  ))
  .add('type select', () => (
    <Input type="select">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Input>
  ))
