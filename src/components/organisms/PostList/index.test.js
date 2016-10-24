import React from 'react'
import { shallow } from 'enzyme'
import PostList from '.'

const list = [
  { id: 1, title: 'title 1', body: 'body 1' },
  { id: 2, title: 'title 2', body: 'body 2' },
  { id: 3, title: 'title 3', body: 'body 3' }
]

const wrap = (props = {}) => shallow(<PostList list={list} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders loading when passed in', () => {
  const wrapper = wrap({ loading: true })
  expect(wrapper.contains('Loading')).toBe(true)
})
