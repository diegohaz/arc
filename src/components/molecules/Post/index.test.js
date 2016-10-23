import React from 'react'
import { mount, shallow } from 'enzyme'
import Post from '.'

const wrap = (props = {}) => shallow(<Post title="test title" body="test body" {...props} />)

it('mounts with different combination of props', () => {
  const wrapMounted = (props = {}) => mount(<Post title="a" body="b" {...props} />)
  wrapMounted()
  wrapMounted({ loading: true })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test title')).toBe(true)
})

it('renders body', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test body')).toBe(true)
})

it('renders placeholder when loading', () => {
  const wrapper = wrap({ loading: true })
  expect(wrapper.contains('test title')).toBe(true)
  expect(wrapper.contains('test body')).toBe(true)
})
