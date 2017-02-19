import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostsPage } from 'components'

storiesOf('PostsPage', module)
  .add('default', () => (
    <PostsPage />
  ))
