import { PropTypes } from 'react'
import styled from 'styled-components'
import { getColor } from 'arc-theme'

export const borderColor = ({ theme, reverse, color }) => getColor([color, 1], !reverse, theme)

const HorizontalRule = styled.hr`
  border: 1px solid ${borderColor};
  border-width: 0 0 1px;
  width: 100%;
`

HorizontalRule.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

HorizontalRule.defaultProps = {
  color: 'grayscale'
}

export default HorizontalRule
