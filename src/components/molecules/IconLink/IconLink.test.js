import React from 'react'
import { shallow } from 'enzyme'
import Radium from 'radium'
import IconLink from './IconLink'

Radium.TestMode.enable()

it('renders children when passed in', () => {
  const wrapper = shallow(<IconLink icon="github" responsive>test</IconLink>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<IconLink icon="github" id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<IconLink icon="github" style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders icon on left by default', () => {
  const wrapper = shallow(<IconLink icon="github">test</IconLink>)
  expect(wrapper.children().at(0).prop('icon')).toBe('github')
})

it('renders icon on right when prop is passed in', () => {
  const wrapper = shallow(<IconLink icon="github" right>test</IconLink>)
  expect(wrapper.children().at(1).prop('icon')).toBe('github')
})
