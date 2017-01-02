import React from 'react'
import { shallow } from 'enzyme'
import Heading, * as styles from '.'

const wrap = (props = {}) => shallow(<Heading {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('renders h1 by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('h1')).toHaveLength(1)
})

it('renders hLevel when level is passed in', () => {
  const wrapper = wrap({ level: 2 })
  expect(wrapper.find('h2')).toHaveLength(1)
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

  test('fontSize', () => {
    const fontSize = (level) => parseFloat(styles.fontSize({ level })).toFixed(2)
    expect(fontSize(1)).toBe('1.75')
    expect(fontSize(2)).toBe('1.25')
    expect(fontSize(3)).toBe('1.08')
    expect(fontSize(4)).toBe('1.00')
    expect(fontSize(5)).toBe('0.95')
    expect(fontSize(6)).toBe('0.92')
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
