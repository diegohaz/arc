import React from 'react'
import { shallow } from 'enzyme'
import Caption, * as styles from '.'

const wrap = (props = {}) => shallow(<Caption {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 1: '#555' }
    },
    reverseColors: {
      grayscale: { 1: '#bbb' }
    }
  }

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[1])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[1])
  })
})
