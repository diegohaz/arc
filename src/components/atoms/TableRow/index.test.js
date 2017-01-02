import React from 'react'
import { shallow } from 'enzyme'
import TableRow, * as styles from '.'

const wrap = (props = {}) => shallow(<TableRow {...props} />)

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
    colors: {
      grayscale: { 0: '#222', 1: '#555' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb' }
    }
  }

  test('backgroundColor', () => {
    expect(styles.backgroundColor({ theme })).toBe(theme.reverseColors.grayscale[0])
    expect(styles.backgroundColor({ theme, filled: true })).toBe(theme.reverseColors.grayscale[1])
    expect(styles.backgroundColor({ theme, reverse: true })).toBe(theme.colors.grayscale[0])
    expect(styles.backgroundColor({ theme, filled: true, reverse: true }))
      .toBe(theme.colors.grayscale[1])
  })
})
