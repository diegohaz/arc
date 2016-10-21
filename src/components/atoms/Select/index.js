import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'

const Select = styled.select`
  display: block;
  width: 100%;
  color: inherit;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.125rem;
  border: 1px solid ${(props) => props.invalid ? colors.danger[2] : colors.grayscale[3]};
  border-radius: 2px;
  height: 2.5rem;
  background-color: #fff;
`

Select.propTypes = {
  invalid: PropTypes.bool
}

export default Select
