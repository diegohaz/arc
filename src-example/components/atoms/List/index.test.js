import React from 'react'
import { shallow } from 'enzyme'
import List, { Ol, Ul } from '.'

const wrap = (props = {}) => shallow(<List {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders ul by default', () => {
  const wrapper = wrap()
  expect(wrapper.find(Ul)).toHaveLength(1)
})

it('renders ol when ordered prop is passed in', () => {
  const wrapper = wrap({ ordered: true })
  expect(wrapper.find(Ol)).toHaveLength(1)
})
