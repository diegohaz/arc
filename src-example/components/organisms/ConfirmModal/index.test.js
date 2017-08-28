import React from 'react'
import { shallow } from 'enzyme'
import ConfirmModal from '.'

const onConfirm = jest.fn()
const onClose = jest.fn()

const wrap = (props = {}) =>
  shallow(<ConfirmModal {...{ onConfirm, onClose }} name="confirm" {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders confirmLabel when passed in', () => {
  const wrapper = wrap({ confirmLabel: 'foo' })
  expect(wrapper.contains('foo')).toBe(true)
})

it('renders cancelLabel when passed in', () => {
  const wrapper = wrap({ cancelLabel: 'bar' })
  expect(wrapper.contains('bar')).toBe(true)
})
