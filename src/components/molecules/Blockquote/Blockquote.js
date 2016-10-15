import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Cite = styled.cite`
  display: block;
  font-family: ${fonts.primary};
  font-weight: 300;
  font-style: normal;
  margin-top: 0.4rem;
`
const StyledBlockquote = styled.blockquote`
  position: relative;
  font-family: ${fonts.quote};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${colors.grayscale[1]};
  border-left: 5px solid ${colors.grayscale[4]};
  margin: 1rem 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
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
  children: PropTypes.any
}

export default Blockquote
