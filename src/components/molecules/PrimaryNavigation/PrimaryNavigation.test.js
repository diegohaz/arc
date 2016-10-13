import React from 'react'
import { shallow } from 'enzyme'
import PrimaryNavigation from './PrimaryNavigation'

it('renders props when passed in', () => {
  const wrapper = shallow(<PrimaryNavigation id="foo" />)
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})

it('renders styles when passed in', () => {
  const wrapper = shallow(<PrimaryNavigation style={{ color: 'black' }} />)
  expect(typeof wrapper.prop('style')).toBe('object')
  expect(wrapper.prop('style').color).toBe('black')
})

it('renders globals when passed in', () => {
  const wrapper = shallow(<PrimaryNavigation globals={['test']} />)
  expect(wrapper.find({ href: '#globals' }).length).toBeGreaterThan(0)
  expect(wrapper.find({ href: '#test' }).length).toBeGreaterThan(0)
})

it('renders types when passed in', () => {
  const props = {
    globals: ['globals-test1', 'globals-test2'],
    atoms: ['atoms-test1', 'atoms-test2'],
    molecules: ['molecules-test1', 'molecules-test2'],
    organisms: ['organisms-test1', 'organisms-test2'],
    templates: ['templates-test1', 'templates-test2'],
    pages: ['pages-test1', 'pages-test2']
  }
  const wrapper = shallow(<PrimaryNavigation {...props} />)
  Object.keys(props).forEach((prop) => {
    expect(wrapper.find({ href: `#${prop}` }).length).toBeGreaterThan(0)
    expect(wrapper.find({ href: `#${prop}-test1` }).length).toBeGreaterThan(0)
    expect(wrapper.find({ href: `#${prop}-test2` }).length).toBeGreaterThan(0)
  })
})
