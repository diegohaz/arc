import React from 'react'
import { shallow } from 'enzyme'
import Radium from 'radium'
import Hero from './Hero'

Radium.TestMode.enable()

it('renders props when passed in', () => {
  const wrapper = shallow(<Hero id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Hero style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
