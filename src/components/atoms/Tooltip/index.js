import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { fonts } from 'components/globals'

export const pos = ({ right, bottom, left }) =>
  right ? 'right' : bottom ? 'bottom' : left ? 'left' : 'top'

export const opposite = ({ right, bottom, left }) =>
  right ? 'left' : bottom ? 'top' : left ? 'right' : 'bottom'

export const perpendicular = ({ left, right }) =>
  left || right ? 'top' : 'left'

export const perpendicularAxis = ({ left, right }) =>
  left || right ? 'Y' : 'X'

const styles = css`
  position: relative;

  &:hover:before,
  &:focus:before,
  &:hover:after,
  &:focus:after {
    display: block;
  }

  &:before {
    pointer-events: none;
    display: none;
    position: absolute;
    content: attr(data-title);
    font-family: ${fonts.primary};
    text-transform: none;
    font-size: 0.875rem;
    line-height: 1.5;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 0.5rem 1rem;
    ${opposite}: calc(100% + 16px);
    ${perpendicular}: 50%;
    transform: translate${perpendicularAxis}(-50%);
  }

  &:after {
    pointer-events: none;
    display: none;
    position: absolute;
    ${opposite}: 100%;
    ${perpendicular}: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    border-${pos}-color: rgba(0, 0, 0, 0.85);
    border-width: 0.5rem;
    margin-${perpendicular}: -0.5rem;
  }
`

const Tooltip = styled(({ top, right, bottom, left, children, ...props }) =>
  React.cloneElement(children, {
    tabIndex: 0,
    ...props
  })
)`${styles}`

Tooltip.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  'data-title': PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Tooltip
