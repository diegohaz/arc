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

const backgroundColor = ({ light }) =>
  light ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'

const color = ({ light }) =>
  light ? 'black' : 'white'

const styles = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    pointer-events: none;
    display: block;
    opacity: 0;
    transition: opacity 100ms ease-in-out, ${opposite} 100ms ease-in-out;
    will-change: ${opposite};
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
    ${opposite}: calc(100% + 1rem);
  }

  &:hover:after,
  &:focus:after {
    opacity: 1;
    ${opposite}: 100%;
  }

  &:before {
    content: attr(data-title);
    font-family: ${fonts.primary};
    white-space: nowrap;
    text-transform: none;
    font-size: 0.8125rem;
    line-height: 1.5;
    text-align: center;
    color: ${color};
    background-color: ${backgroundColor};
    border-radius: 0.15384em;
    padding: 0.75em 1em;
    ${opposite}: calc(100% + 2rem);
    ${perpendicular}: 50%;
    transform: translate${perpendicularAxis}(-50%);
  }

  &:after {
    ${opposite}: calc(100% + 1rem);
    ${perpendicular}: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    border-${pos}-color: ${backgroundColor};
    border-width: 0.5rem;
    margin-${perpendicular}: -0.5rem;
  }
`

const Tooltip = styled(({ top, right, bottom, left, light, children, ...props }) =>
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
  light: PropTypes.bool,
  'data-title': PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Tooltip
