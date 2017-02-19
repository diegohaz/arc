import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostUpdatePage } from 'components'

storiesOf('PostUpdatePage', module)
  .add('default', () => (
    <PostUpdatePage />
  ))
