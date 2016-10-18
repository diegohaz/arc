import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' }).length).toBeGreaterThan(0)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button').length).toBeGreaterThan(0)
})

it('renders Link when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders differently when prop disabled is passed in', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ disabled: true })
  expect(wrapper.debug()).not.toBe(element)
})

it('renders differently when another kind is passed in', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ kind: 'secondary' })
  expect(wrapper.debug()).not.toBe(element)
})
