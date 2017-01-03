import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import Label, * as styles from '.'

const wrap = (props = {}) => shallow(<Label {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ htmlFor: 'foo' })
  expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[1])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[1])
  })
})
