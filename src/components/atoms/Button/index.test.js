import React from 'react'
import { mount, shallow } from 'enzyme'
import Button from '.'

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

it('mounts with different combination of props', () => {
  mount(<Button disabled />)
  mount(<Button transparent />)
  mount(<Button transparent disabled />)
  mount(<Button light />)
  mount(<Button kind="secondary" />)
  mount(<Button size={100} />)
  mount(<Button disabled>test</Button>)
  mount(<Button transparent>test</Button>)
  mount(<Button transparent disabled>test</Button>)
  mount(<Button light>test</Button>)
  mount(<Button kind="secondary">test</Button>)
  mount(<Button size={100}>test</Button>)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' }).length).toBeGreaterThan(0)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button').length).toBeGreaterThan(0)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('a').length).toBeGreaterThan(0)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' })
  expect(wrapper.find('Link').length).toBeGreaterThan(0)
})
