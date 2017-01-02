import React, { PropTypes } from 'react'
import styled from 'styled-components'

export const quoteFontFamily = ({ theme }) => theme.fonts.quote
export const citeFontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[1]

export const borderColor = ({ theme, reverse }) =>
  theme[reverse ? 'colors' : 'reverseColors'].grayscale[2]

const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: ${quoteFontFamily};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${color};
  border-left: 5px solid ${borderColor};
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
`

const Cite = styled.cite`
  display: block;
  font-family: ${citeFontFamily};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
`

const Blockquote = ({ cite, children, ...props, theme }) => {
  return (
    <StyledBlockquote {...props}>
      <div>{children}</div>
      {cite && <Cite theme={theme}>{cite}</Cite>}
    </StyledBlockquote>
  )
}

Blockquote.propTypes = {
  cite: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  theme: PropTypes.object
}

Blockquote.defaultProps = {
  theme: {
    fonts: {
      primary: 'sans-serif',
      quote: 'serif'
    },
    colors: {
      grayscale: { 1: '#555', 2: '#888' }
    },
    reverseColors: {
      grayscale: { 1: '#bbb', 2: '#888' }
    }
  }
}

export default Blockquote
