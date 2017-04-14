import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const HorizontalRule = styled.hr`
  border: 1px solid ${palette(1, true)};
  border-width: 0 0 1px;
  width: 100%;
`

HorizontalRule.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

HorizontalRule.defaultProps = {
  palette: 'grayscale',
}

export default HorizontalRule
