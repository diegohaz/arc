import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

it('renders props when passed in', () => {
  const wrapper = shallow(<Input type="text" />)
  expect(wrapper.find({ type: 'text' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Input style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders input by default', () => {
  const wrapper = shallow(<Input />).shallow()
  expect(wrapper.find('input').length).toBeGreaterThan(0)
})

it('renders textarea when type is textarea', () => {
  const wrapper = shallow(<Input type="textarea" />).shallow()
  expect(wrapper.find('textarea').length).toBeGreaterThan(0)
})

it('renders differently when prop invalid is passed in', () => {
  const wrapper = shallow(<Input />)
  const element = wrapper.debug()
  wrapper.setProps({ invalid: true })
  expect(wrapper.debug()).not.toEqual(element)
})

it('renders differently when type is textarea', () => {
  const wrapper = shallow(<Input />)
  const element = wrapper.debug()
  wrapper.setProps({ type: 'textarea' })
  expect(wrapper.debug()).not.toEqual(element)
})

it('renders differently when type is radio', () => {
  const wrapper = shallow(<Input />)
  const element = wrapper.debug()
  wrapper.setProps({ type: 'radio' })
  expect(wrapper.debug()).not.toEqual(element)
})

it('renders differently when type is checkbox', () => {
  const wrapper = shallow(<Input />)
  const element = wrapper.debug()
  wrapper.setProps({ type: 'checkbox' })
  expect(wrapper.debug()).not.toEqual(element)
})
