import React from 'react'
import { shallow } from 'enzyme'
import LogoImage, { height } from '.'

const wrap = (props = {}) => shallow(<LogoImage {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('execute height Function', () => {
  expect(height({ height: 35 })).toBe(35)
})
