import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from './Paragraph'

it('renders children when passed in', () => {
  const wrapper = shallow(<Paragraph>test</Paragraph>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Paragraph id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Paragraph style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})
