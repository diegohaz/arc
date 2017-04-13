import React from 'react'
import { shallow } from 'enzyme'
import Footer from '.'

const wrap = (props = {}) => shallow(<Footer {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
