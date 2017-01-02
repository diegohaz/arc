import React from 'react'
import { shallow } from 'enzyme'
import Badge, * as styles from '.'

const wrap = (props = {}) => shallow(<Badge {...props} />)

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
      grayscale: { 0: '#222', 1: '#555' },
      primary: { 1: '#2196f3' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb' },
      primary: { 1: '#71bcf7' }
    }
  }

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    expect(styles.color({ theme, reverse: false })).toBe(theme.reverseColors.grayscale[0])
    expect(styles.color({ theme, reverse: true })).toBe(theme.colors.grayscale[0])
  })

  test('backgroundColor', () => {
    const props = {
      color: 'primary',
      reverse: false,
      theme
    }
    expect(styles.backgroundColor(props)).toBe(theme.colors.primary[1])
    expect(styles.backgroundColor({ ...props, reverse: true })).toBe(theme.reverseColors.primary[1])
  })
})
