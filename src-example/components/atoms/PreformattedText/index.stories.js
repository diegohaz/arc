import React from 'react'
import { storiesOf } from '@storybook/react'
import PreformattedText from '.'

storiesOf('PreformattedText', module)
  .add('default', () => (
    <PreformattedText>git clone https://github.com/diegohaz/arc</PreformattedText>
  ))
  .add('reverse', () => (
    <PreformattedText reverse>git clone https://github.com/diegohaz/arc</PreformattedText>
  ))
  .add('block', () => (
    <PreformattedText block>git clone https://github.com/diegohaz/arc</PreformattedText>
  ))
  .add('block reverse', () => (
    <PreformattedText block reverse>git clone https://github.com/diegohaz/arc</PreformattedText>
  ))
