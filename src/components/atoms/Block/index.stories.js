import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('reverse', () => (
    <Block reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('color', () => (
    <Block color="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('color reverse', () => (
    <Block color="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('color transparent', () => (
    <Block color="primary" transparent>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
  .add('color transparent reverse', () => (
    <Block color="primary" transparent reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Block>
  ))
