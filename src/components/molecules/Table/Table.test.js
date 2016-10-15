import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

it('renders children when passed in', () => {
  const wrapper = shallow(<Table>test</Table>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Table id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Table style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders caption when passed in', () => {
  const wrapper = shallow(<Table caption="test caption" />)
  expect(wrapper.contains('test caption')).toBe(true)
})

it('renders head when passed in', () => {
  const wrapper = shallow(<Table head="test head" />)
  expect(wrapper.contains('test head')).toBe(true)
})

it('renders foot when passed in', () => {
  const wrapper = shallow(<Table foot="test foot" />)
  expect(wrapper.contains('test foot')).toBe(true)
})
