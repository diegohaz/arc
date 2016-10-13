import React from 'react'
import { shallow } from 'enzyme'
import HorizontalRule from './HorizontalRule'

it('renders props when passed in', () => {
  const wrapper = shallow(<HorizontalRule id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<HorizontalRule style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
