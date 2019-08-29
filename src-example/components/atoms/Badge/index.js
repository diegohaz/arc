import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledBadge = styled.span`
  font-family: ${font('primary')};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  color: ${palette('grayscale', 0, true)};
  background-color: ${palette(1)};
  border-radius: 0.16667em;
`

StyledBadge.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledBadge.defaultProps = {
  palette: 'primary',
}

const Badge = ({ ...props }) => {
  return (
    <StyledBadge {...props} />
  )
}
export default Badge
