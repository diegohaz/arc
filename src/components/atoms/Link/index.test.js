import React from 'react'
import { mount, shallow } from 'enzyme'
import Link from '.'

const wrap = (props = {}) => shallow(<Link {...props} />).dive()

it('mounts with different combination of props', () => {
  mount(<Link />)
  mount(<Link light />)
  mount(<Link light>test</Link>)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders anchor by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('a').length).toBeGreaterThan(0)
})

it('renders Link when prop to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})
