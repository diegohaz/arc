import React from 'react'
import { shallow } from 'enzyme'
import LogoImage from './LogoImage'

const wrap = (props = {}) => shallow(<LogoImage {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
