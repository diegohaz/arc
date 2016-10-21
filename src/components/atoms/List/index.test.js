import React from 'react'
import { shallow } from 'enzyme'
import List from '.'

const wrap = (props = {}) => shallow(<List {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders ul by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('ul').length).toBeGreaterThan(0)
})

it('renders ol when ordered prop is passed in', () => {
  const wrapper = wrap({ ordered: true })
  expect(wrapper.find('ol').length).toBeGreaterThan(0)
})
