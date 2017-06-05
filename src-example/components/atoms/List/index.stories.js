import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '.'

storiesOf('List', module)
  .add('default', () => (
    <List>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  ))
  .add('ordered', () => (
    <List ordered>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  ))
  .add('palette', () => (
    <List palette="primary">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  ))
  .add('palette reverse', () => (
    <List palette="primary" reverse>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  ))
