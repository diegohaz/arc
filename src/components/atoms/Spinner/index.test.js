import React from 'react'
import { shallow } from 'enzyme'
import Spinner from '.'

const wrap = (props = {}) => shallow(<Spinner {...props} />)

it('renders with different props', () => {
  wrap({ light: true })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})
