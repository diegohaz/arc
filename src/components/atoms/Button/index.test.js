import React from 'react'
import { shallow } from 'enzyme'
import Button, * as styles from '.'

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button')).toHaveLength(1)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('a')).toHaveLength(1)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' }).dive()
  expect(wrapper.find('Link')).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222', 1: '#555', 2: '#888' },
      primary: { 0: '#1976d2', 1: '#2196f3', 2: '#71bcf7' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb', 2: '#888' },
      primary: { 0: '#c2e2fb', 1: '#71bcf7', 2: '#2196f3' }
    }
  }

  test('colorKind', () => {
    expect(styles.colorKind({ theme, reverse: false })).toEqual(theme.colors)
    expect(styles.colorKind({ theme, reverse: true })).toEqual(theme.reverseColors)
  })

  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('borderColor', () => {
    expect(styles.borderColor({ transparent: false })).toBe('transparent')
    expect(styles.borderColor({ transparent: true })).toBe('currentcolor')
  })

  test('cursor', () => {
    expect(styles.cursor({ disabled: false })).toBe('pointer')
    expect(styles.cursor({ disabled: true })).toBe('default')
  })

  test('pointerEvents', () => {
    expect(styles.pointerEvents({ disabled: false })).toBe('auto')
    expect(styles.pointerEvents({ disabled: true })).toBe('none')
  })

  test('backgroundColor', () => {
    const props = {
      color: 'primary',
      transparent: false,
      disabled: false,
      reverse: false,
      theme
    }
    const f = styles.backgroundColor
    expect(f(props)).toBe(theme.colors.primary[1])
    expect(f({ ...props, color: 'grayscale' })).toBe(theme.colors.grayscale[1])
    expect(f({ ...props, transparent: true })).toBe('transparent')
    expect(f({ ...props, disabled: true })).toBe(theme.colors.primary[2])
    expect(f({ ...props, reverse: true })).toBe(theme.reverseColors.primary[1])
    expect(f({ ...props, disabled: true, reverse: true })).toBe(theme.reverseColors.primary[2])
  })

  test('color', () => {
    const props = {
      color: 'primary',
      transparent: true,
      disabled: false,
      reverse: false,
      theme
    }
    const f = styles.color
    expect(f(props)).toBe(theme.colors.primary[1])
    expect(f({ ...props, transparent: false })).toBe(theme.colors.grayscale[0])
    expect(f({ ...props, disabled: true })).toBe(theme.colors.primary[2])
    expect(f({ ...props, reverse: true })).toBe(theme.reverseColors.primary[1])
    expect(f({ ...props, disabled: true, reverse: true })).toBe(theme.reverseColors.primary[2])
  })

  test('hoverBackgroundColor', () => {
    const props = {
      color: 'primary',
      transparent: false,
      disabled: false,
      reverse: false,
      theme
    }
    const f = styles.hoverBackgroundColor
    expect(f(props)).toBe(theme.colors.primary[0])
    expect(f({ ...props, color: 'grayscale' })).toBe(theme.colors.grayscale[0])
    expect(f({ ...props, transparent: true })).toBe(false)
    expect(f({ ...props, disabled: true })).toBe(false)
    expect(f({ ...props, reverse: true })).toBe(theme.reverseColors.primary[0])
    expect(f({ ...props, disabled: true, reverse: true })).toBe(false)
  })

  test('hoverColor', () => {
    const props = {
      color: 'primary',
      transparent: true,
      disabled: false,
      reverse: false,
      theme
    }
    const f = styles.hoverColor
    expect(f(props)).toBe(theme.colors.primary[0])
    expect(f({ ...props, transparent: false })).toBe(false)
    expect(f({ ...props, disabled: true })).toBe(false)
    expect(f({ ...props, reverse: true })).toBe(theme.reverseColors.primary[0])
    expect(f({ ...props, disabled: true, reverse: true })).toBe(false)
  })
})
