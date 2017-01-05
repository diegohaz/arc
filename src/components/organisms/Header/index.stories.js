import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Header } from 'components'

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ))
