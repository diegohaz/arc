import React from 'react'
import { mount, shallow } from 'enzyme'
import Modal from '.'

const onClose = jest.fn()

const wrap = (props = {}) => shallow(<Modal onClose={onClose} {...props} />)

it('renders modal with different props', () => {
  mount(<Modal onClose={onClose} />)
  mount(<Modal onClose={onClose} closeable />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})

it('renders title when passed in', () => {
  const wrapper = wrap({ title: 'test title' })
  expect(wrapper.contains('test title')).toBe(true)
})

it('renders close button when closeable is passed in', () => {
  const wrapper = wrap({ closeable: true })
  expect(wrapper.find({ onClick: onClose })).toHaveLength(1)
})
