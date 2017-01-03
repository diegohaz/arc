import { PropTypes } from 'react'
import styled from 'styled-components'
import { reverseColor } from 'arc-theme'

const HorizontalRule = styled.hr`
  border: 1px solid ${reverseColor(1)};
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
