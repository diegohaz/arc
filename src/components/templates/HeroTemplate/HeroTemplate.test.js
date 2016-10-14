import React from 'react'
import { shallow } from 'enzyme'
import HeroTemplate from './HeroTemplate'

const render = () => shallow(
  <HeroTemplate logo="logo" hero="hero" nav="nav" footer="footer">test</HeroTemplate>
).shallow()

it('renders children when passed in', () => {
  const wrapper = render('test')
  expect(wrapper.contains('test')).toBe(true)
})

it('renders logo', () => {
  const wrapper = render()
  expect(wrapper.contains('logo')).toBe(true)
})

it('renders hero', () => {
  const wrapper = render()
  expect(wrapper.contains('hero')).toBe(true)
})

it('renders nav', () => {
  const wrapper = render()
  expect(wrapper.contains('nav')).toBe(true)
})

it('renders footer', () => {
  const wrapper = render()
  expect(wrapper.contains('footer')).toBe(true)
})
