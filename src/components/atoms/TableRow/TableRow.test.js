import React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'

const wrap = (props = {}) => shallow(<TableRow {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders differently when prop filled is passed in', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ filled: true })
  expect(wrapper.debug()).not.toEqual(element)
})
