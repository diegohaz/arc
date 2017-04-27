import React from 'react'
import { shallow } from 'enzyme'
import Link from '.'

const wrap = (props = {}) => shallow(<Link {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders anchor by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('a')).toHaveLength(1)
})

it('renders Link when prop to is passed in', () => {
  const wrapper = wrap({ to: 'test' }).dive()
  expect(wrapper.find('NavLink')).toHaveLength(1)
})
