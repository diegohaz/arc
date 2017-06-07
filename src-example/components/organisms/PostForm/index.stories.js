import React from 'react'
import { storiesOf } from '@storybook/react'
import { PostForm } from 'containers'

storiesOf('PostForm', module)
  .add('default', () => (
    <PostForm />
  ))
