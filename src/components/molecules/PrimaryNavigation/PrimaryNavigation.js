import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { fonts, colors } from 'components/globals'
import { Link } from 'components'

const Nav = styled.nav`
  display: inline-block;
  font-family: ${fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  color: ${colors.grayscale[0]};
  list-style: none;
  text-align: right;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  line-height: 1.3rem;
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
`

const StyledInnerLink = styled(Link)`
  font-weight: 300;
  color: ${colors.grayscale[1]};
`

const renderLink = (item, inner) => (
  inner
    ? <StyledInnerLink href={`#${item}`}>{item}</StyledInnerLink>
    : <StyledLink href={`#${item}`}>{item}</StyledLink>
)

const renderList = (items) => (
  <List>
    {items.map((item, i) => <li key={i}>{renderLink(item, true)}</li>)}
  </List>
)

const PrimaryNavigation = ({
  globals, atoms, molecules, organisms, templates, pages, ...props
}) => {
  return (
    <Nav {...props}>
      {globals && <li>{renderLink('globals')}{renderList(globals)}</li>}
      {atoms && <li>{renderLink('atoms')}{renderList(atoms)}</li>}
      {molecules && <li>{renderLink('molecules')}{renderList(molecules)}</li>}
      {organisms && <li>{renderLink('organisms')}{renderList(organisms)}</li>}
      {templates && <li>{renderLink('templates')}{renderList(templates)}</li>}
      {pages && <li>{renderLink('pages')}{renderList(pages)}</li>}
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  globals: PropTypes.array,
  atoms: PropTypes.array,
  molecules: PropTypes.array,
  organisms: PropTypes.array,
  templates: PropTypes.array,
  pages: PropTypes.array
}

export default PrimaryNavigation
