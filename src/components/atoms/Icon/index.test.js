import React from 'react'
import { mount, shallow } from 'enzyme'
import Icon from '.'

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} />).dive()

it('mounts with different combination of props', () => {
  mount(<Icon icon="github" />)
  mount(<Icon icon="github" size={20} />)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
