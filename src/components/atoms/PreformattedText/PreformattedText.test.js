import React from 'react'
import { shallow } from 'enzyme'
import PreformattedText from './PreformattedText'

it('renders children when passed in', () => {
  const wrapper = shallow(<PreformattedText>test</PreformattedText>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<PreformattedText id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<PreformattedText style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders different style when prop inline is passed in', () => {
  const wrapper = shallow(<PreformattedText />)
  const style = wrapper.prop('style')
  wrapper.setProps({ inline: true })
  expect(wrapper.prop('style')).not.toEqual(style)
})
