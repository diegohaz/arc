import React from 'react'
import { shallow } from 'enzyme'
import Blockquote from './Blockquote'

it('renders children when passed in', () => {
  const wrapper = shallow(<Blockquote>test</Blockquote>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Blockquote id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Blockquote style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders cite when passed in', () => {
  const wrapper = shallow(<Blockquote cite="foo" />).shallow()
  expect(wrapper.contains('foo')).toBe(true)
})
