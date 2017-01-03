import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const quoteFontFamily = ({ theme }) => get('fonts.quote', theme)
export const citeFontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse }) => getColor('grayscale[1]', reverse, theme)
export const borderColor = ({ theme, reverse }) => getColor('grayscale[2]', !reverse, theme)

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

export default Blockquote
