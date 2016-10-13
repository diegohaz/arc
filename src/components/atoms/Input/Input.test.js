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
  const wrapper = shallow(<Input />)
  expect(wrapper.find('input').length).toBeGreaterThan(0)
})

it('renders textarea when type is textarea', () => {
  const wrapper = shallow(<Input type="textarea" />)
  expect(wrapper.find('textarea').length).toBeGreaterThan(0)
})

it('renders different style when prop invalid is passed in', () => {
  const wrapper = shallow(<Input />)
  const style = wrapper.prop('style')
  wrapper.setProps({ invalid: true })
  expect(wrapper.prop('style')).not.toEqual(style)
})

it('renders different style when type is textarea', () => {
  const wrapper = shallow(<Input />)
  const style = wrapper.prop('style')
  wrapper.setProps({ type: 'textarea' })
  expect(wrapper.prop('style')).not.toEqual(style)
})

it('renders different style when type is radio', () => {
  const wrapper = shallow(<Input />)
  const style = wrapper.prop('style')
  wrapper.setProps({ type: 'radio' })
  expect(wrapper.prop('style')).not.toEqual(style)
})

it('renders different style when type is checkbox', () => {
  const wrapper = shallow(<Input />)
  const style = wrapper.prop('style')
  wrapper.setProps({ type: 'checkbox' })
  expect(wrapper.prop('style')).not.toEqual(style)
})
