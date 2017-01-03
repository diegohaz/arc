import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import Molecule, * as styles from '.'

const wrap = (props = {}) => shallow(<Molecule {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  test('fontFamily', () => {
    expect(styles.fontFamily({ theme })).toBe(theme.fonts.primary)
  })

  test('color', () => {
    expect(styles.color({ theme })).toBe(theme.colors.grayscale[0])
    expect(styles.color({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[0])
  })
})
