import React from 'react'
import { shallow } from 'enzyme'
import Hero from '.'

const wrap = (props = {}) => shallow(<Hero {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
