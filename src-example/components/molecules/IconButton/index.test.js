import React from 'react'
import { mount, shallow } from 'enzyme'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton icon="github" {...props} />)

it('mounts with different combination of props', () => {
  mount(<IconButton icon="github">test</IconButton>)
  mount(<IconButton icon="github" right>test</IconButton>)
  mount(<IconButton icon="github" responsive>test</IconButton>)
  mount(<IconButton icon="github" collapsed>test</IconButton>)
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
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('passes height to icon', () => {
  const wrapper = wrap({ height: 20 })
  expect(wrapper.find({ height: 20 / 2.5 })).toHaveLength(1)
})
