import React from 'react'
import { shallow } from 'enzyme'
import Field from '.'

const wrap = (props = {}) => shallow(<Field name="name" {...props} />)

it('renders input props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders name', () => {
  const wrapper = wrap()
  expect(wrapper.find({ name: 'name' })).toHaveLength(1)
})

it('renders label when passed in', () => {
  const wrapper = wrap({ label: 'foo label' })
  expect(wrapper.contains('foo label')).toBe(true)
})

it('does not render error when passed in without invalid', () => {
  const wrapper = wrap({ error: 'foo error' })
  expect(wrapper.contains('foo error')).toBe(false)
})

it('renders error when passed in along with invalid', () => {
  const wrapper = wrap({ error: 'foo error', invalid: true })
  expect(wrapper.contains('foo error')).toBe(true)
})

it('renders label after input when type is checkbox', () => {
  const wrapper = wrap({ type: 'checkbox', label: 'foo label' })
  expect(wrapper.childAt(0).is('Input')).toBe(true)
  expect(wrapper.childAt(1).is('Label')).toBe(true)
})

it('renders label after input when type is radio', () => {
  const wrapper = wrap({ type: 'radio', label: 'foo label' })
  expect(wrapper.childAt(0).is('Input')).toBe(true)
  expect(wrapper.childAt(1).is('Label')).toBe(true)
})
