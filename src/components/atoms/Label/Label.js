import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Label = styled.label`
  font-family: ${fonts.primary};
  font-size: 1rem;
  line-height: 2rem;
  color: ${colors.grayscale[1]};
`

Label.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

export default Label
