import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostPage } from 'components'

storiesOf('PostPage', module)
  .add('default', () => (
    <PostPage />
  ))
