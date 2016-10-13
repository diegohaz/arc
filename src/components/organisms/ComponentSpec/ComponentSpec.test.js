import React from 'react'
import { shallow } from 'enzyme'
import ComponentSpec from './ComponentSpec'

it('renders children when passed in', () => {
  const wrapper = shallow(<ComponentSpec title="Button">test</ComponentSpec>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<ComponentSpec title="Button" id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<ComponentSpec title="Button" style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders id with title', () => {
  const wrapper = shallow(<ComponentSpec title="Button" />)
  expect(wrapper.prop('id')).toBe('Button')
})

it('renders title', () => {
  const wrapper = shallow(<ComponentSpec title="Button" />)
  expect(wrapper.contains('Button')).toBe(true)
})

it('sets source code url properly', () => {
  const wrapper = shallow(<ComponentSpec title="Button" />)
  const element = wrapper.findWhere((el) => /atoms\/Button$/.test(el.prop('href')))
  expect(element.length).toBeGreaterThan(0)
})

it('sets source code url properly when path is passed in', () => {
  const wrapper = shallow(<ComponentSpec title="Button" path="foo/bar" />)
  const element = wrapper.findWhere((el) => /foo\/bar$/.test(el.prop('href')))
  expect(element.length).toBeGreaterThan(0)
})
