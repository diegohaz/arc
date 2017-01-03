import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import Spinner, * as styles from '.'

const wrap = (props = {}) => shallow(<Spinner {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  test('backgroundColor', () => {
    expect(styles.backgroundColor({ theme })).toBe(theme.reverseColors.grayscale[1])
    expect(styles.backgroundColor({ theme, reverse: true })).toBe(theme.colors.grayscale[1])
  })

  test('color', () => {
    const props = {
      color: 'primary',
      reverse: false,
      theme
    }
    expect(styles.color(props)).toBe(theme.colors.primary[1])
    expect(styles.color({ ...props, reverse: true })).toBe(theme.reverseColors.primary[1])
  })
})
