import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>{children}</Wrapper>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired
}

export default PageTemplate
