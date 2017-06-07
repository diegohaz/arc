import React from 'react'
import { shallow } from 'enzyme'
import PostForm from '.'

const handleSubmit = jest.fn()

const wrap = (props = {}) => shallow(<PostForm handleSubmit={handleSubmit} {...props} />)

it('calls renderSubmit when submitted', () => {
  handleSubmit.mockClear()
  const wrapper = wrap()
  expect(handleSubmit).not.toBeCalled()
  wrapper.simulate('submit')
  expect(handleSubmit).toBeCalled()
})

it('disables button while submitting', () => {
  const wrapper = wrap()
  expect(wrapper.find({ disabled: true }).length).toBe(0)
  wrapper.setProps({ submitting: true })
  expect(wrapper.find({ disabled: true })).toHaveLength(1)
})
