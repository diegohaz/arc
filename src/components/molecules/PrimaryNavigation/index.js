import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledLink = styled(Link)`
  font-weight: 300;
  color: ${[ ...colors.grayscale ].reverse()[3]};
  font-size: 1.25rem;

  &.active {
    color: ${[ ...colors.grayscale ].reverse()[0]};
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><StyledLink to="/" onlyActiveOnIndex activeClassName="active">Home</StyledLink></li>
      <li><StyledLink to="/sample-page" activeClassName="active">Sample page</StyledLink></li>
    </Nav>
  )
}

export default PrimaryNavigation
