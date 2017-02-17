import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostCreatePage } from 'components'

storiesOf('PostCreatePage', module)
  .add('default', () => (
    <PostCreatePage />
  ))
