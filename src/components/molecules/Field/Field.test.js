import React from 'react'
import { shallow } from 'enzyme'
import Field from './Field'

it('renders input props when passed in', () => {
  const wrapper = shallow(<Field name="name" class="foo" />)
  expect(wrapper.find({ class: 'foo' }).length).toBeGreaterThan(0)
})

it('renders label when passed in', () => {
  const wrapper = shallow(<Field name="name" label="foo label" />)
  expect(wrapper.contains('foo label')).toBe(true)
})

it('renders error when passed in along with invalid', () => {
  const wrapper = shallow(<Field name="name" error="foo error" invalid />)
  expect(wrapper.contains('foo error')).toBe(true)
})

it('does not render error when passed in without invalid', () => {
  const wrapper = shallow(<Field name="name" error="foo error" />)
  expect(wrapper.contains('foo error')).toBe(false)
})
