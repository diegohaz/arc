import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

export const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette({ grayscale: 0 }, 1)};
`

export const StyledHeading = styled(({
  level, children, reverse, palette, theme, ...props
}) => React.createElement(`h${level}`, props, children))`${styles}`

StyledHeading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledHeading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

const Heading = ({ ...props }) => {
  return (
    <StyledHeading {...props} />
  )
}

export default Heading
