import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Link } from 'components'

export const linkColor = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[2]

export const activeLinkColor = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[0]

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${linkColor};
    font-size: 1.25rem;
    &.active {
      color: ${activeLinkColor};
    }
  }
`

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/" onlyActiveOnIndex activeClassName="active">Home</Link></li>
      <li><Link to="/sample-page" activeClassName="active">Sample page</Link></li>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool
}

PrimaryNavigation.defaultProps = {
  theme: {
    colors: {
      grayscale: { 0: '#222', 2: '#888' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 2: '#888' }
    }
  }
}

export default PrimaryNavigation
