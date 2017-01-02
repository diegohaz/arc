import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary
export const fontSize = ({ height }) => `${height / 35.5555555556}rem`
export const padding = ({ type }) => type === 'textarea' ? '0.4444444444em' : '0 0.4444444444em'
export const height = ({ type }) => type === 'textarea' ? 'auto' : '2.2222222222em'

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[0]

export const borderColor = ({ invalid, theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'][invalid ? 'danger' : 'grayscale'][invalid ? 2 : 3]

export const backgroundColor = ({ theme, reverse }) =>
  theme[reverse ? 'colors' : 'reverseColors'].grayscale[0]

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
  border: 1px solid ${borderColor};
  border-radius: 2px;
  background-color: ${backgroundColor};

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
  height: 40,
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      danger: { 2: '#f8877f' },
      grayscale: { 0: '#222', 3: '#bbb' }
    },
    reverseColors: {
      danger: { 2: '#f44336' },
      grayscale: { 0: '#fff', 3: '#555' }
    }
  }
}

export default Input
