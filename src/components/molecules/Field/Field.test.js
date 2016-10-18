import React from 'react'
import { shallow } from 'enzyme'
import Field from './Field'

const wrap = (props = {}) => shallow(<Field name="name" {...props} />)

it('renders input props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders label when passed in', () => {
  const wrapper = wrap({ label: 'foo label' })
  expect(wrapper.contains('foo label')).toBe(true)
})

it('does not render error when passed in without invalid', () => {
  const wrapper = wrap({ error: 'foo error' })
  expect(wrapper.contains('foo error')).toBe(false)
})

it('renders error when passed in along with invalid', () => {
  const wrapper = wrap({ error: 'foo error', invalid: true })
  expect(wrapper.contains('foo error')).toBe(true)
})
