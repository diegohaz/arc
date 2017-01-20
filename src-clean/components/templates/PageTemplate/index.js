import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTemplate = (props) => {
  return (
    <Wrapper {...props} />
  )
}

export default PageTemplate
