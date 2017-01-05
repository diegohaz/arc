import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostList } from 'components'

const list = [
  { title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco aliqua.' },
  { title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco aliqua.' },
  { title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco aliqua.' },
  { title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco aliqua.' }
]

storiesOf('PostList', module)
  .add('default', () => (
    <PostList list={list} />
  ))
  .add('loading', () => (
    <PostList list={[]} loading />
  ))
