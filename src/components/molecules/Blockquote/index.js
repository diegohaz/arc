import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor } from 'arc-theme'

const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: ${font('quote')};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${color('grayscale', 1)};
  border-left: 5px solid ${reverseColor('grayscale', 2)};
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
`

const Cite = styled.cite`
  display: block;
  font-family: ${font('primary')};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
`

const Blockquote = ({ cite, children, ...props }) => {
  return (
    <StyledBlockquote {...props}>
      <div>{children}</div>
      {cite && <Cite>{cite}</Cite>}
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
