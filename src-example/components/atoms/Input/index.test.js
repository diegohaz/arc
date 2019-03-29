import React from 'react'
import { shallow } from 'enzyme'
import Input, {
  StyledTextarea,
  StyledSelect,
  StyledInput,
  fontSize,
} from '.'

const wrap = (props = {}) => shallow(<Input {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' })).toHaveLength(1)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find(StyledInput)).toHaveLength(1)
})

it('renders select when type is select', () => {
  const wrapper = wrap({ type: 'select' })
  expect(wrapper.find(StyledSelect)).toHaveLength(1)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })
  expect(wrapper.find(StyledTextarea)).toHaveLength(1)
})

it('execute fontSizeFunction', () => {
  expect(fontSize({ height: 35 })).toBe('1rem')
})
