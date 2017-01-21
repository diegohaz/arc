import React from 'react'
import styled from 'styled-components'

import { IconLink, PrimaryNavigation, Block } from 'components'
import { UserButton } from 'containers'

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

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <StyledIconLink to="/" icon="arc" height={100} />
      <StyledPrimaryNavigation reverse />
      <UserButton reverse transparent />
    </Wrapper>
  )
}

export default Header
