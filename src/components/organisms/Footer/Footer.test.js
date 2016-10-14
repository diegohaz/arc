import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

it('renders props when passed in', () => {
  const wrapper = shallow(<Footer id="foo" />).shallow()
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Footer style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
