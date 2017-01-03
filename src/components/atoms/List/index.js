import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)

export const color = ({ theme, reverse, color }) =>
  getColor([color, color === 'grayscale' ? 0 : 1], reverse, theme)

const styles = css`
  font-family: ${fontFamily};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${color};
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string,
  reverse: PropTypes.bool
}

List.defaultProps = {
  color: 'grayscale'
}

export default List
