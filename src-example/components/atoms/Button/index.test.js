import React from 'react'
import { shallow } from 'enzyme'
import Button, {
  StyledButton,
  Anchor,
  StyledLink,
  fontSize,
  backgroundColor,
  foregroundColor,
  hoverBackgroundColor,
  hoverForegroundColor,
} from '.'

const wrap = (props = {}) => shallow(<Button {...props} />)

it('renders with different combination of props', () => {
  wrap({ disabled: true })
  wrap({ transparent: true })
  wrap({ disabled: true, transparent: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find(StyledButton)).toHaveLength(1)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find(Anchor)).toHaveLength(1)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find(StyledLink)).toHaveLength(1)
})

it('execute fontSizeFunction', () => {
  expect(fontSize({ height: 40 })).toBe('1rem')
})

it('execute backgroundColor Function with transparency', () => {
  expect(backgroundColor({ transparent: true })).toBe('transparent')
})

it('execute backgroundColor Function  without transparency', () => {
  expect(backgroundColor({ transparent: false, disabled: false })).toBeInstanceOf(Function)
})

it('execute backgroundColor Function  without transparency', () => {
  expect(backgroundColor({ transparent: false, disabled: true })).toBeInstanceOf(Function)
})

it('execute foregroundColor Function', () => {
  expect(foregroundColor({ transparent: true, disabled: true })).toBeInstanceOf(Function)
})

it('execute foregroundColor Function', () => {
  expect(foregroundColor({ transparent: true, disabled: false })).toBeInstanceOf(Function)
})

it('execute foregroundColor Function', () => {
  expect(foregroundColor({ transparent: false })).toBeInstanceOf(Function)
})

it('execute hoverBackgroundColor Function', () => {
  expect(hoverBackgroundColor({ transparent: false, disabled: false })).toBeInstanceOf(Function)
})

it('execute hoverForegroundColor Function', () => {
  expect(hoverForegroundColor({ transparent: false, disabled: false })).toBe(false)
})

it('execute hoverForegroundColor Function with transparency', () => {
  expect(hoverForegroundColor({ transparent: true, disabled: false })).toBeInstanceOf(Function)
})

it('execute hoverForegroundColor Function with transparency', () => {
  expect(StyledLink).toBeInstanceOf(Object)
})
