import React from 'react'
import { mount, shallow } from 'enzyme'
import IconLink from '.'

const wrap = (props = {}) => shallow(<IconLink icon="github" {...props} />)

it('mounts with different combination of props', () => {
  mount(<IconLink icon="github">test</IconLink>)
  mount(<IconLink icon="github" right>test</IconLink>)
  mount(<IconLink icon="github" responsive>test</IconLink>)
  mount(<IconLink icon="github" right responsive>test</IconLink>)
  mount(<IconLink icon="github" />)
  mount(<IconLink icon="github" right />)
  mount(<IconLink icon="github" responsive />)
  mount(<IconLink icon="github" right responsive />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('passes size to icon', () => {
  const wrapper = wrap({ size: 20 })
  expect(wrapper.find({ size: 20 / 3 })).toHaveLength(1)
})

it('renders icon on left by default', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.children().at(0).prop('icon')).toBe('github')
})

it('renders icon on right when prop is passed in', () => {
  const wrapper = wrap({ children: 'test', right: true })
  expect(wrapper.children().at(1).prop('icon')).toBe('github')
})
