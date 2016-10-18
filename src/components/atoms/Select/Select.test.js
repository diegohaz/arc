import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

it('renders children when passed in', () => {
  const wrapper = shallow(<Select>test</Select>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Select id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Select style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders differently when prop invalid is passed in', () => {
  const wrapper = shallow(<Select />)
  const element = wrapper.debug()
  wrapper.setProps({ invalid: true })
  expect(wrapper.debug()).not.toBe(element)
})
