import React from 'react'
import { shallow } from 'enzyme'
import theme from 'arc-theme'
import HorizontalRule, * as styles from '.'

const wrap = (props = {}) => shallow(<HorizontalRule {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

describe('styles', () => {
  test('borderColor', () => {
    const props = {
      color: 'grayscale',
      reverse: false,
      theme
    }
    expect(styles.borderColor(props)).toBe(theme.reverseColors.grayscale[1])
    expect(styles.borderColor({ ...props, reverse: true })).toBe(theme.colors.grayscale[1])
  })
})
