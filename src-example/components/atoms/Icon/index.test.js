// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { shallow } from 'enzyme'
import Icon, { fontSize } from '.'

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} />)

it('renders with different combination of props', () => {
  wrap({ height: 40 })
})

it('renders with width', () => {
  wrap({ width: 40, height: 50 })
})

it('execute fontSizeFunction', () => {
  expect(fontSize({ width: 16, height: 50 })).toBe('1rem')
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
