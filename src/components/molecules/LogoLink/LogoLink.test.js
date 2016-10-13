import React from 'react'
import { shallow } from 'enzyme'
import LogoLink from './LogoLink'

it('renders props when passed in', () => {
  const wrapper = shallow(<LogoLink id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<LogoLink style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('has default width', () => {
  const wrapper = shallow(<LogoLink />)
  expect(wrapper.find({ width: 80 }).length).toBeGreaterThan(0)
})

it('sets width when passed in', () => {
  const wrapper = shallow(<LogoLink width={100} />)
  expect(wrapper.find({ width: 100, height: undefined }).length).toBeGreaterThan(0)
})

it('sets height when passed in', () => {
  const wrapper = shallow(<LogoLink height={100} />)
  expect(wrapper.find({ width: undefined, height: 100 }).length).toBeGreaterThan(0)
})
