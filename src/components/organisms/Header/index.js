import React from 'react'
import styled from 'styled-components'

import { IconLink, PrimaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  padding: 1rem;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <StyledIconLink to="/" icon="arc" height={100} />
      <PrimaryNavigation reverse />
    </Wrapper>
  )
}

export default Header
