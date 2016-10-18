import React from 'react'
import { shallow } from 'enzyme'
import PreformattedText from './PreformattedText'

const wrap = (props = {}) => shallow(<PreformattedText {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders differently when prop inline is passed in', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ inline: true })
  expect(wrapper.debug()).not.toBe(element)
})
