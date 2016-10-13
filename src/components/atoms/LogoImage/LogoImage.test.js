import React from 'react'
import { shallow } from 'enzyme'
import LogoImage from './LogoImage'

it('renders props when passed in', () => {
  const wrapper = shallow(<LogoImage id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<LogoImage style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
