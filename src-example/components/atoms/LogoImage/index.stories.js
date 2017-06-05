import React from 'react'
import { storiesOf } from '@storybook/react'
import LogoImage from '.'

storiesOf('LogoImage', module)
  .add('default', () => (
    <LogoImage width={200} />
  ))
