import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

const wrap = (props = {}) => shallow(<Input {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' }).length).toBeGreaterThan(0)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('input').length).toBeGreaterThan(0)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })
  expect(wrapper.find('textarea').length).toBeGreaterThan(0)
})

it('renders differently when prop invalid is passed in', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ invalid: true })
  expect(wrapper.debug()).not.toBe(element)
})

it('renders differently when type is textarea', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ type: 'textarea' })
  expect(wrapper.debug()).not.toBe(element)
})

it('renders differently when type is radio', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ type: 'radio' })
  expect(wrapper.debug()).not.toBe(element)
})

it('renders differently when type is checkbox', () => {
  const wrapper = wrap()
  const element = wrapper.debug()
  wrapper.setProps({ type: 'checkbox' })
  expect(wrapper.debug()).not.toBe(element)
})
