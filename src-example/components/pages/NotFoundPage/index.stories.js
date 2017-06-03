import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from 'components'

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ))
