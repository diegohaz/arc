import React from 'react'
import { shallow } from 'enzyme'
import Link from './Link'

it('renders children when passed in', () => {
  const wrapper = shallow(<Link>test</Link>).shallow()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = shallow(<Link id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
