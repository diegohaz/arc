import React from 'react'
import { shallow } from 'enzyme'
import Icon, * as styles from '.'

const wrap = (props = {}) => shallow(<Icon icon="github" {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    colors: {
      grayscale: { 0: '#222' },
      primary: { 1: 'red' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' },
      primary: { 1: 'blue' }
    }
  }

  test('fontSize', () => {
    const fontSize = (height) => parseFloat(styles.fontSize({ height })).toFixed(2)
    expect(fontSize()).toBe('1.25')
    expect(fontSize(20)).toBe('1.25')
    expect(fontSize(16)).toBe('1.00')
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
    expect(styles.color({ ...props, color: null })).toBe('currentcolor')
  })
})
