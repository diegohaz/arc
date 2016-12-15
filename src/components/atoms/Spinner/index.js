import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'

import { colors, reverseColors } from 'components/globals'

const loading = keyframes`
  0% { transform: rotate(90deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg) scale(1.5); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${loading} 1.5s infinite ease-in-out;
  background-color: ${(props) =>
    props.light ? reverseColors[props.kind][1] : colors[props.kind][1]
  };
`

Spinner.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool
}

Spinner.defaultProps = {
  kind: 'primary'
}

export default Spinner
