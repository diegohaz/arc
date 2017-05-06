import React from 'react'
import { shallow } from 'enzyme'
import Feature from '.'

const wrap = (props = {}) => shallow(<Feature title="Test" {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Test')).toBe(true)
})

it('renders code', () => {
  const wrapper = wrap({ code: 'npm run build' })
  expect(wrapper.contains('npm run build')).toBe(true)
})

it('renders icon when passed in', () => {
  const wrapper = wrap({ icon: 'test' })
  expect(wrapper.find({ icon: 'test' })).toHaveLength(1)
})

it('renders link when passed in', () => {
  const wrapper = wrap({ link: 'test' })
  expect(wrapper.find({ href: 'test' })).toHaveLength(1)
})

it('renders badge when prop soon is passed in', () => {
  const wrapper = wrap({ soon: true })
  expect(wrapper.contains('soon')).toBe(true)
})
