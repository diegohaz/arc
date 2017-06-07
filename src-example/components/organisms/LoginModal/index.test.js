import React from 'react'
import { shallow } from 'enzyme'
import LoginModal from '.'

const onFacebookLogin = jest.fn()
const onGoogleLogin = jest.fn()
const onClose = jest.fn()

const wrap = (props = {}) =>
  shallow(<LoginModal {...{ onFacebookLogin, onGoogleLogin, onClose }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('calls onClose when user passed in', () => {
  onClose.mockClear()
  const wrapper = wrap()
  expect(onClose).not.toBeCalled()
  wrapper.setProps({ user: {} })
  expect(onClose).toHaveBeenCalledTimes(1)
  wrapper.setProps({ user: null })
  expect(onClose).toHaveBeenCalledTimes(1)
})
