import React from 'react'
import { shallow } from 'enzyme'
import TableCell from './TableCell'

it('renders children when passed in', () => {
  const wrapper = shallow(<TableCell>test</TableCell>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<TableCell id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<TableCell style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders td by default', () => {
  const wrapper = shallow(<TableCell />).dive()
  expect(wrapper.find('td').length).toBeGreaterThan(0)
})

it('renders th when prop heading is passed in', () => {
  const wrapper = shallow(<TableCell heading />).dive()
  expect(wrapper.find('th').length).toBeGreaterThan(0)
})
