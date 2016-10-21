import React from 'react'
import { mount, shallow } from 'enzyme'
import Input from '.'

const wrap = (props = {}) => shallow(<Input {...props} />).dive()

it('mounts with different combination of props', () => {
  mount(<Input />)
  mount(<Input invalid />)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' }).length).toBeGreaterThan(0)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('input').length).toBeGreaterThan(0)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })
  expect(wrapper.find('textarea').length).toBeGreaterThan(0)
})
