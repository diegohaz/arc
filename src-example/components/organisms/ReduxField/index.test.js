import React from 'react'
import { shallow } from 'enzyme'
import ReduxField from '.'

let meta
let input
const wrap = (props = {}) => shallow(<ReduxField {...{ meta, input, ...props }} />)

beforeEach(() => {
  meta = {
    touched: false,
    error: null,
  }
  input = {
    name: 'test',
  }
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders input props when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.find({ name: 'test' })).toHaveLength(1)
})

it('does not render invalid when was not touched', () => {
  const wrapper = wrap()
  expect(wrapper.find({ invalid: true }).length).toBe(0)
  wrapper.setProps({ meta: { error: 'test' } })
  expect(wrapper.find({ invalid: true }).length).toBe(0)
})

it('does not render invalid when has no error', () => {
  const wrapper = wrap()
  expect(wrapper.find({ invalid: true }).length).toBe(0)
  wrapper.setProps({ meta: { touched: true } })
  expect(wrapper.find({ invalid: true }).length).toBe(0)
})

it('renders invalid when was touched and has error', () => {
  const wrapper = wrap({ meta: { touched: true, error: 'test error' } })
  expect(wrapper.find({ invalid: true })).toHaveLength(1)
})

it('renders error when passed in', () => {
  const wrapper = wrap({ meta: { error: 'test error' } })
  expect(wrapper.find({ error: 'test error' })).toHaveLength(1)
})
