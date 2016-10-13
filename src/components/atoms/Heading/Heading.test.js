import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

it('renders children when passed in', () => {
  const wrapper = shallow(<Heading>test</Heading>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Heading id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Heading style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders h1 by default', () => {
  const wrapper = shallow(<Heading />)
  expect(wrapper.find('h1').length).toBeGreaterThan(0)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = shallow(<Heading level={2} />)
  expect(wrapper.find('h2').length).toBeGreaterThan(0)
})
