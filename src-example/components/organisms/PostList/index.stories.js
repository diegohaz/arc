import React from 'react'
import { storiesOf } from '@storybook/react'
import { PostList } from 'components'

const list = [
  { id: 0, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 1, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 2, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
  { id: 3, title: 'Post 1', body: 'Voluptate ullamco anim exercitation deserunt cillum ullamco.' },
]

storiesOf('PostList', module)
  .add('default', () => (
    <PostList list={list} />
  ))
  .add('loading', () => (
    <PostList list={[]} loading />
  ))
