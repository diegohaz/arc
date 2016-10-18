import React from 'react'
import { shallow } from 'enzyme'
import HeroTemplate from './HeroTemplate'

const wrap = () => shallow(
  <HeroTemplate
    logo="logo"
    hero="hero"
    nav="nav"
    footer="footer">
    test
  </HeroTemplate>
)

it('renders children when passed in', () => {
  const wrapper = wrap('test')
  expect(wrapper.contains('test')).toBe(true)
})

it('renders logo', () => {
  const wrapper = wrap()
  expect(wrapper.contains('logo')).toBe(true)
})

it('renders hero', () => {
  const wrapper = wrap()
  expect(wrapper.contains('hero')).toBe(true)
})

it('renders nav', () => {
  const wrapper = wrap()
  expect(wrapper.contains('nav')).toBe(true)
})

it('renders footer', () => {
  const wrapper = wrap()
  expect(wrapper.contains('footer')).toBe(true)
})
