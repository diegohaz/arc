import React from 'react'
import { shallow } from 'enzyme'
import TableCell from '.'

const wrap = (props = {}) => shallow(<TableCell {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders td by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('td').length).toBeGreaterThan(0)
})

it('renders th when prop heading is passed in', () => {
  const wrapper = wrap({ heading: true })
  expect(wrapper.find('th').length).toBeGreaterThan(0)
})
