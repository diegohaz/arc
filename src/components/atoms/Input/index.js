import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const fontSize = ({ height }) => `${height / 35.5555555556}rem`
export const padding = ({ type }) => type === 'textarea' ? '0.4444444444em' : '0 0.4444444444em'
export const height = ({ type }) => type === 'textarea' ? 'auto' : '2.2222222222em'
export const color = ({ theme, reverse }) => getColor('grayscale[0]', reverse, theme)
export const backgroundColor = ({ theme, reverse }) => getColor('grayscale[0]', !reverse, theme)

export const borderColor = ({ invalid, theme, reverse }) =>
  getColor(invalid ? 'danger[2]' : 'grayscale[3]', reverse, theme)

const styles = css`
  font-family: ${fontFamily};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${padding};
  height: ${height};
  color: ${color};
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 2px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props, type }) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  } else if (type === 'select') {
    return <StyledSelect {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  height: 40
}

export default Input
