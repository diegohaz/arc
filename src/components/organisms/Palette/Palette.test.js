import React from 'react'
import { shallow } from 'enzyme'
import includes from 'lodash/includes'
import Palette from './Palette'

it('renders props when passed in', () => {
  const wrapper = shallow(<Palette id="foo" hexes={[]} />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Palette style={{ color: 'black' }} hexes={[]} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders title when passed in', () => {
  const wrapper = shallow(<Palette title="test" hexes={[]} />)
  expect(wrapper.contains('Test')).toBe(true)
})

it('renders hexes when passed in', () => {
  const wrapper = shallow(<Palette hexes={['#aaa', '#bbb']} />)
  const find = (needle) => wrapper.findWhere((el) => includes(el.props(), needle))
  expect(find('#aaa').length).toBeGreaterThan(0)
  expect(find('#bbb').length).toBeGreaterThan(0)
})
