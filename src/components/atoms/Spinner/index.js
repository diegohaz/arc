import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'
import { getColor } from 'arc-theme'

export const backgroundColor = ({ theme, reverse }) => getColor('grayscale[1]', !reverse, theme)
export const color = ({ theme, reverse, color }) => getColor([color, 1], reverse, theme)

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: relative;
  border: 0.2em solid ${backgroundColor};
  border-bottom-color: ${color};
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${spin} 1s linear infinite;
`

Spinner.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Spinner.defaultProps = {
  color: 'primary'
}

export default Spinner
