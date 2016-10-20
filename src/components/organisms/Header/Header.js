import React from 'react'
import styled from 'styled-components'

import { colors, animations } from 'components/globals'
import { IconLink, PrimaryNavigation } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.grayscale[0]};
  padding: 1rem;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
  color: ${colors.primary[1]};

  &:hover {
    color: ${colors.primary[2]};
    animation: ${animations.rotate360} 5s linear infinite;
  }
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <StyledIconLink to="/" icon="arc" size={100} />
      <PrimaryNavigation />
    </Wrapper>
  )
}

export default Header
