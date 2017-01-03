import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import Table, * as styles from '.'

const wrap = (props = {}) => shallow(<Table {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders caption when passed in', () => {
  const wrapper = wrap({ caption: 'test caption' })
  expect(wrapper.contains('test caption')).toBe(true)
})

it('renders head when passed in', () => {
  const wrapper = wrap({ head: 'test head' })
  expect(wrapper.contains('test head')).toBe(true)
})

it('renders foot when passed in', () => {
  const wrapper = wrap({ foot: 'test foot' })
  expect(wrapper.contains('test foot')).toBe(true)
})

describe('styles', () => {
  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('borderColor', () => {
    expect(styles.borderColor({ theme })).toBe(theme.reverseColors.grayscale[1])
    expect(styles.borderColor({ theme, reverse: true })).toBe(theme.colors.grayscale[1])
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[0])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[0])
  })
})
