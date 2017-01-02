import React from 'react'
import { shallow } from 'enzyme'
import Input, * as styles from '.'

const wrap = (props = {}) => shallow(<Input {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' })).toHaveLength(1)
})

it('renders input by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('input')).toHaveLength(1)
})

it('renders select when type is select', () => {
  const wrapper = wrap({ type: 'select' })
  expect(wrapper.find('select')).toHaveLength(1)
})

it('renders textarea when type is textarea', () => {
  const wrapper = wrap({ type: 'textarea' })
  expect(wrapper.find('textarea')).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      danger: { 2: '#f8877f' },
      grayscale: { 0: '#222', 3: '#bbb' }
    },
    reverseColors: {
      danger: { 2: '#f44336' },
      grayscale: { 0: '#fff', 3: '#555' }
    }
  }

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('fontSize', () => {
    const fontSize = (height) => parseFloat(styles.fontSize({ height })).toFixed(2)
    expect(fontSize(40)).toBe('1.12')
    expect(fontSize(50)).toBe('1.41')
    expect(fontSize(60)).toBe('1.69')
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[0])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[0])
  })

  test('borderColor', () => {
    expect(styles.borderColor({ theme })).toBe(theme.colors.grayscale[3])
    expect(styles.borderColor({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[3])
    expect(styles.borderColor({ theme, invalid: true })).toBe(theme.colors.danger[2])
    expect(styles.borderColor({ theme, invalid: true, reverse: true }))
      .toBe(theme.reverseColors.danger[2])
  })

  test('backgroundColor', () => {
    expect(styles.backgroundColor({ theme })).toBe(theme.reverseColors.grayscale[0])
    expect(styles.backgroundColor({ theme, reverse: true })).toBe(theme.colors.grayscale[0])
  })
})
