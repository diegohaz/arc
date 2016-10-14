import React from 'react'
import { shallow } from 'enzyme'
import Label from './Label'

it('renders children when passed in', () => {
  const wrapper = shallow(<Label>test</Label>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Label htmlFor="foo" />)
  expect(wrapper.find({ htmlFor: 'foo' }).length).toBeGreaterThan(0)
})
