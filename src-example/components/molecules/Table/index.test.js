import React from 'react'
import { shallow } from 'enzyme'
import Table from '.'

const wrap = (props = {}) => shallow(<Table {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders caption when passed in', () => {
  const wrapper = wrap({ caption: 'test caption' })
  expect(wrapper.contains('test caption')).toBe(true)
})

it('renders head when passed in', () => {
  const wrapper = wrap({ head: 'test head' })
  expect(wrapper.contains('test head')).toBe(true)
})

it('renders foot when passed in', () => {
  const wrapper = wrap({ foot: 'test foot' })
  expect(wrapper.contains('test foot')).toBe(true)
})
