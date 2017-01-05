import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { NotFoundPage } from 'components'

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ))
