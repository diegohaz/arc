import React from 'react'
import { shallow } from 'enzyme'
import LogoLink from './LogoLink'

const wrap = (props = {}) => shallow(<LogoLink {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('has default width', () => {
  const wrapper = wrap()
  expect(wrapper.find({ width: 80 }).length).toBeGreaterThan(0)
})

it('sets width when passed in', () => {
  const wrapper = wrap({ width: 100 })
  expect(wrapper.find({ width: 100, height: undefined }).length).toBeGreaterThan(0)
})

it('sets height when passed in', () => {
  const wrapper = wrap({ height: 100 })
  expect(wrapper.find({ width: undefined, height: 100 }).length).toBeGreaterThan(0)
})
