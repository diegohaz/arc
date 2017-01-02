import React from 'react'
import { shallow } from 'enzyme'
import Block, * as styles from '.'

const wrap = (props = {}) => shallow(<Block {...props} />)

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
      grayscale: { 0: '#222' },
      primary: { 0: 'darkred', 1: 'red' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' },
      primary: { 0: 'lightblue', 1: 'blue' }
    }
  }

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('backgroundColor', () => {
    const props = {
      color: 'grayscale',
      reverse: false,
      theme
    }
    expect(styles.backgroundColor(props)).toBe(theme.reverseColors.grayscale[0])
    expect(styles.backgroundColor({ ...props, transparent: true })).toBe('transparent')
    expect(styles.backgroundColor({ ...props, reverse: true })).toBe(theme.colors.grayscale[0])
    expect(styles.backgroundColor({ ...props, color: 'primary' }))
      .toBe(theme.reverseColors.primary[0])
  })

  test('color', () => {
    const props = {
      color: 'grayscale',
      reverse: false,
      theme
    }
    expect(styles.color(props)).toBe(theme.colors.grayscale[0])
    expect(styles.color({ ...props, reverse: true })).toBe(theme.reverseColors.grayscale[0])
    expect(styles.color({ ...props, color: 'primary' })).toBe(theme.colors.primary[1])
  })
})
