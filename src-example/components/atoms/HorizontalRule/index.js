import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledHorizontalRule = styled.hr`
  border: 1px solid ${palette(1, true)};
  border-width: 0 0 1px;
  width: 100%;
`

StyledHorizontalRule.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledHorizontalRule.defaultProps = {
  palette: 'grayscale',
}

const HorizontalRule = ({ ...props }) => {
  return (
    <StyledHorizontalRule {...props} />
  )
}

export default HorizontalRule
