import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors } from 'components'

const Input = styled(({ invalid, type, ...props }) => {
  if (type === 'textarea') {
    return <textarea {...props} />
  }
  return <input {...props} type={type} />
})`
  display: block;
  width: 100%;
  color: inherit;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.123rem;
  border: 1px solid ${(props) => props.invalid ? colors.danger[2] : colors.grayscale[3]};
  border-radius: 2px;
  height: ${(props) => props.type === 'textarea' ? 'auto' : '2.5rem'};

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

Input.propTypes = {
  invalid: PropTypes.bool,
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input
