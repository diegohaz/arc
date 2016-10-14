import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

it('renders input props when passed in', () => {
  const wrapper = shallow(<Icon icon="github" id="foo" />).shallow()
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Icon icon="github" style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
