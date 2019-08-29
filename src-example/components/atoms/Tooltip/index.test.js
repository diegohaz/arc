import React from 'react'
import { shallow } from 'enzyme'
import Tooltip, {
  opposite,
  perpendicular,
  perpendicularAxis,
  StyledTooltip,
  perpendicularOpposite,
  align,
  borderPosition,
} from '.'

const wrap = (props = {}) => (
  shallow(<Tooltip data-title="title" {...props}><span>test</span></Tooltip>)
)

it('renders with different props', () => {
  wrap({ align: 'start' })
  wrap({ align: 'center' })
})

it('renders inner component with props', () => {
  const wrapper = wrap({ align: 'center' })
  expect(wrapper.find(StyledTooltip)).toHaveLength(1)
})

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

test('opposite', () => {
  expect(opposite({ position: 'top' })).toBe('bottom')
  expect(opposite({ position: 'right' })).toBe('left')
  expect(opposite({ position: 'bottom' })).toBe('top')
  expect(opposite({ position: 'left' })).toBe('right')
})

test('perpendicularOpposite', () => {
  expect(perpendicularOpposite({ position: 'top' })).toBe('right')
  expect(perpendicularOpposite({ position: 'right' })).toBe('bottom')
  expect(perpendicularOpposite({ position: 'bottom' })).toBe('right')
  expect(perpendicularOpposite({ position: 'left' })).toBe('bottom')
})

test('perpendicular', () => {
  expect(perpendicular({ position: 'top' })).toBe('left')
  expect(perpendicular({ position: 'right' })).toBe('top')
  expect(perpendicular({ position: 'bottom' })).toBe('left')
  expect(perpendicular({ position: 'left' })).toBe('top')
})

test('perpendicularAxis', () => {
  expect(perpendicularAxis({ position: 'top' })).toBe('X')
  expect(perpendicularAxis({ position: 'right' })).toBe('Y')
  expect(perpendicularAxis({ position: 'bottom' })).toBe('X')
  expect(perpendicularAxis({ position: 'left' })).toBe('Y')
})

test('Align Function with start', () => {
  expect(align({ align: 'start' })).toBeInstanceOf(Array)
})

test('Align Function with center', () => {
  expect(align({ align: 'center' })).toBeInstanceOf(Array)
})

test('Align Function with end', () => {
  expect(align({ align: 'end' })).toBeInstanceOf(Array)
})

test('borderPosition Function', () => {
  expect(borderPosition({ position: 'top' })).toBe('top')
})
