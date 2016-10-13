import React from 'react'
import { shallow } from 'enzyme'
import Link from './Link'

it('renders children when passed in', () => {
  const wrapper = shallow(<Link>test</Link>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Link id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Link href="test" style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders Link by default', () => {
  const wrapper = shallow(<Link />)
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders anchor tag when href is passed in', () => {
  const wrapper = shallow(<Link href="test" />)
  expect(wrapper.find('a').length).toBeGreaterThan(0)
})

it('renders Link when to is passed in', () => {
  const wrapper = shallow(<Link to="test" />)
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders different style when another kind is passed in', () => {
  const wrapper = shallow(<Link />)
  const style = wrapper.prop('style')
  wrapper.setProps({ kind: 'secondary' })
  expect(wrapper.prop('style')).not.toEqual(style)
})
