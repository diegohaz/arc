import React from 'react'
import { shallow } from 'enzyme'
import Heading, { StyledHeading, fontSize } from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders h1 by default', () => {
  const wrapper = wrap()
  expect(wrapper.find(StyledHeading).find({ level: 1 })).toHaveLength(1)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = wrap({ level: 2 })
  expect(wrapper.find(StyledHeading).find({ level: 2 })).toHaveLength(1)
})

it('execute fontSizeFunction', () => {
  expect(fontSize({ level: 1 })).toBe('1.75rem')
})
