import React from 'react'
import { shallow } from 'enzyme'
import ComponentSpec from './ComponentSpec'

const wrap = (props = {}) => shallow(<ComponentSpec title="Button" {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders id with title', () => {
  const wrapper = wrap()
  expect(wrapper.prop('id')).toBe('Button')
})

it('renders title', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Button')).toBe(true)
})

it('sets source code url properly', () => {
  const wrapper = wrap()
  const element = wrapper.findWhere((el) => /atoms\/Button$/.test(el.prop('href')))
  expect(element.length).toBeGreaterThan(0)
})

it('sets source code url properly when path is passed in', () => {
  const wrapper = wrap({ path: 'foo/bar' })
  const element = wrapper.findWhere((el) => /foo\/bar$/.test(el.prop('href')))
  expect(element.length).toBeGreaterThan(0)
})
