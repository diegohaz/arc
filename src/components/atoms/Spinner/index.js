import { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'

export const backgroundColor = ({ theme, reverse }) =>
  theme[reverse ? 'colors' : 'reverseColors'].grayscale[1]

export const color = ({ theme, reverse, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][1]

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
  color: 'primary',
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      primary: { 1: '#2196f3' },
      grayscale: { 1: '#555' }
    },
    reverseColors: {
      primary: { 1: '#71bcf7' },
      grayscale: { 1: '#bbb' }
    }
  }
}

export default Spinner
