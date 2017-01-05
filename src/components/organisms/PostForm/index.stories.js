import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostForm } from 'containers'

storiesOf('PostForm', module)
  .add('default', () => (
    <PostForm />
  ))
