import React from 'react'
import { mount, shallow } from 'enzyme'
import Slider from '.'

const wrap = (props = {}) => shallow(<Slider {...props} />)

it('renders input props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('mounts with different combination of props', () => {
  mount(<Slider disabled />)
  mount(<Slider responsive />)
  mount(<Slider reverse />)
})
