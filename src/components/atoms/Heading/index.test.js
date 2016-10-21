import React from 'react'
import { shallow } from 'enzyme'
import Heading from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders h1 by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('h1').length).toBeGreaterThan(0)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = wrap({ level: 2 })
  expect(wrapper.find('h2').length).toBeGreaterThan(0)
})
