import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

it('renders children when passed in', () => {
  const wrapper = shallow(<Button>test</Button>)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Button type="submit" />)
  expect(wrapper.find({ type: 'submit' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<Button style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders button by default', () => {
  const wrapper = shallow(<Button />)
  expect(wrapper.find('button').length).toBeGreaterThan(0)
})

it('renders Link when href is passed in', () => {
  const wrapper = shallow(<Button href="test" />)
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders Link when to is passed in', () => {
  const wrapper = shallow(<Button to="test" />)
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})

it('renders different style when prop disabled is passed in', () => {
  const wrapper = shallow(<Button />)
  const style = wrapper.prop('style')
  wrapper.setProps({ disabled: true })
  expect(wrapper.prop('style')).not.toEqual(style)
})

it('renders different style when another kind is passed in', () => {
  const wrapper = shallow(<Button />)
  const style = wrapper.prop('style')
  wrapper.setProps({ kind: 'secondary' })
  expect(wrapper.prop('style')).not.toEqual(style)
})
