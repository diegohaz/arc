import React from 'react'
import { shallow } from 'enzyme'
import Tooltip, { pos, opposite, perpendicular, perpendicularAxis } from '.'

const wrap = (props = {}) => shallow(
  <Tooltip data-title="title" {...props}>
    <span>test</span>
  </Tooltip>
).dive()

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders data-title', () => {
  const wrapper = wrap()
  expect(wrapper.find({ 'data-title': 'title' })).toHaveLength(1)
})

it('renders tabIndex', () => {
  const wrapper = wrap()
  expect(wrapper.find({ tabIndex: 0 })).toHaveLength(1)
})

test('pos', () => {
  expect(pos({ top: true })).toBe('top')
  expect(pos({ right: true })).toBe('right')
  expect(pos({ bottom: true })).toBe('bottom')
  expect(pos({ left: true })).toBe('left')
})

test('opposite', () => {
  expect(opposite({ top: true })).toBe('bottom')
  expect(opposite({ right: true })).toBe('left')
  expect(opposite({ bottom: true })).toBe('top')
  expect(opposite({ left: true })).toBe('right')
})

test('perpendicular', () => {
  expect(perpendicular({ top: true })).toBe('left')
  expect(perpendicular({ right: true })).toBe('top')
  expect(perpendicular({ bottom: true })).toBe('left')
  expect(perpendicular({ left: true })).toBe('top')
})

test('perpendicularAxis', () => {
  expect(perpendicularAxis({ top: true })).toBe('X')
  expect(perpendicularAxis({ right: true })).toBe('Y')
  expect(perpendicularAxis({ bottom: true })).toBe('X')
  expect(perpendicularAxis({ left: true })).toBe('Y')
})
