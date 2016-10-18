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

it('renders differently when prop inline is passed in', () => {
  const wrapper = shallow(<PreformattedText />)
  const element = wrapper.debug()
  wrapper.setProps({ inline: true })
  expect(wrapper.debug()).not.toBe(element)
})
