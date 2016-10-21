import React from 'react'
import { shallow } from 'enzyme'
import HorizontalRule from '.'

const wrap = (props = {}) => shallow(<HorizontalRule {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
