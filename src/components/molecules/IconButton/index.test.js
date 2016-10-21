import React from 'react'
import { mount, shallow } from 'enzyme'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton icon="github" {...props} />)

it('mounts with different combination of props', () => {
  mount(<IconButton icon="github">test</IconButton>)
  mount(<IconButton icon="github" right>test</IconButton>)
  mount(<IconButton icon="github" responsive>test</IconButton>)
  mount(<IconButton icon="github" right responsive>test</IconButton>)
  mount(<IconButton icon="github" />)
  mount(<IconButton icon="github" right />)
  mount(<IconButton icon="github" responsive />)
  mount(<IconButton icon="github" right responsive />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('passes size to icon', () => {
  const wrapper = wrap({ size: 20 })
  expect(wrapper.find({ size: 20 / 2.5 }).length).toBeGreaterThan(0)
})

it('renders icon on left by default', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.children().at(0).prop('icon')).toBe('github')
})

it('renders icon on right when prop is passed in', () => {
  const wrapper = wrap({ children: 'test', right: true })
  expect(wrapper.children().at(1).prop('icon')).toBe('github')
})
