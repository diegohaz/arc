import React from 'react'
import { mount } from 'enzyme'
import CodeSponsor from '.'

const wrap = (props = {}) => mount(<CodeSponsor {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
