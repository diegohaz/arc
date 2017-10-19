import React from 'react'
import { mount, shallow } from 'enzyme'
import GenericTemplate from '.'

const wrap = (props = {}) => shallow(<GenericTemplate {...props}>test</GenericTemplate>)

it('mounts', () => {
  mount(<GenericTemplate>test</GenericTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})
