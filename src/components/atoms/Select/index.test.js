import React from 'react'
import { mount, shallow } from 'enzyme'
import Select from '.'

const wrap = (props = {}) => shallow(<Select {...props} />)

it('mounts with different combination of props', () => {
  mount(<Select />)
  mount(<Select invalid />)
  mount(<Select invalid>test</Select>)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
