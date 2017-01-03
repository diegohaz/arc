import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, color, reverseColor, ifProps } from 'arc-theme'

export const fontSize = ({ height }) => `${height / 35.5555555556}rem`

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProps({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${ifProps({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: ${color('grayscale', 0)};
  background-color: ${reverseColor('grayscale', 0)};
  border: 1px solid ${ifProps('invalid', color('danger', 2), color('grayscale', 3))};
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
