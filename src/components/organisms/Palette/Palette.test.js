import React from 'react'
import { shallow } from 'enzyme'
import includes from 'lodash/includes'
import Palette from './Palette'

const wrap = (props = {}) => shallow(<Palette hexes={[]} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders title when passed in', () => {
  const wrapper = wrap({ title: 'test' })
  expect(wrapper.contains('Test')).toBe(true)
})

it('renders hexes when passed in', () => {
  const wrapper = wrap({ hexes: ['#aaa', '#bbb'] })
  const find = (needle) => wrapper.findWhere((el) => includes(el.props(), needle))
  expect(find('#aaa').length).toBeGreaterThan(0)
  expect(find('#bbb').length).toBeGreaterThan(0)
})
