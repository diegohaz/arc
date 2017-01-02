import React from 'react'
import { shallow } from 'enzyme'
import List, * as styles from '.'

const wrap = (props = {}) => shallow(<List {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders ul by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('ul')).toHaveLength(1)
})

it('renders ol when ordered prop is passed in', () => {
  const wrapper = wrap({ ordered: true })
  expect(wrapper.find('ol')).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222' },
      primary: { 1: 'red' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' },
      primary: { 1: 'blue' }
    }
  }

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
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
