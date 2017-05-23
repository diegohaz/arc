// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { shallow } from 'enzyme'
import Icon from '.'

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} />).dive()

it('renders with different combination of props', () => {
  wrap({ height: 40 })
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
