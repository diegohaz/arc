import React from 'react'
import { shallow } from 'enzyme'
import Blockquote, * as styles from '.'

const wrap = (props = {}) => shallow(<Blockquote {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders cite when passed in', () => {
  const wrapper = wrap({ cite: 'foo' })
  expect(wrapper.contains('foo')).toBe(true)
})

describe('styles', () => {
  const theme = {
    fonts: {
      primary: 'sans-serif',
      quote: 'serif'
    },
    colors: {
      grayscale: { 1: '#555', 2: '#888' }
    },
    reverseColors: {
      grayscale: { 1: '#bbb', 2: '#888' }
    }
  }

  test('quoteFontFamily', () => {
    expect(styles.quoteFontFamily({ theme })).toBe(theme.fonts.quote)
  })

  test('citeFontFamily', () => {
    expect(styles.citeFontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[1])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[1])
  })

  test('borderColor', () => {
    expect(styles.borderColor({ theme })).toBe(theme.reverseColors.grayscale[2])
    expect(styles.borderColor({ theme, reverse: true })).toBe(theme.colors.grayscale[2])
  })
})
