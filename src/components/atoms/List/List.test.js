import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

it('renders children when passed in', () => {
  const wrapper = shallow(<List>test</List>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<List id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<List style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders ul by default', () => {
  const wrapper = shallow(<List />).dive()
  expect(wrapper.find('ul').length).toBeGreaterThan(0)
})

it('renders ol when ordered prop is passed in', () => {
  const wrapper = shallow(<List ordered />).dive()
  expect(wrapper.find('ol').length).toBeGreaterThan(0)
})
