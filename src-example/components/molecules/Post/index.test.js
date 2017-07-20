import React from 'react'
import { mount, shallow } from 'enzyme'
import Post from '.'

const wrap = (props = {}) => shallow(<Post title="test title" body="test body" commentCount={0} {...props} />)

it('mounts with different combination of props', () => {
  const wrapMounted = (props = {}) => mount(<Post title="a" body="b" commentCount={0} {...props} />)
  wrapMounted()
  wrapMounted({ loading: true })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test title')).toBe(true)
})

it('renders body', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test body')).toBe(true)
})
