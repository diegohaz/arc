import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: ${font('quote')};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${palette('grayscale', 1)};
  border-left: 5px solid ${palette('grayscale', 2, true)};
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
}

export default Blockquote
