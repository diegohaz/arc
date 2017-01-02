import React from 'react'
import { shallow } from 'enzyme'
import PrimaryNavigation, * as styles from '.'

const wrap = (props = {}) => shallow(<PrimaryNavigation {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  const theme = {
    colors: {
      grayscale: { 0: '#222', 2: '#888' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 2: '#888' }
    }
  }

  test('linkColor', () => {
    expect(styles.linkColor({ theme })).toBe(theme.colors.grayscale[2])
    expect(styles.linkColor({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[2])
  })

  test('activeLinkColor', () => {
    expect(styles.activeLinkColor({ theme })).toBe(theme.colors.grayscale[0])
    expect(styles.activeLinkColor({ theme, reverse: true })).toBe(theme.reverseColors.grayscale[0])
  })
})
