import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { fonts, colors } from 'components/globals'
import { Link } from 'components'

const renderLink = (item, className) =>
  <Link href={`#${item}`} className={className || 'link'}>{item}</Link>

const renderList = (items) => (
  <ul className="list">
    {items.map((item, i) => <li key={i}>{renderLink(item, 'inner-link')}</li>)}
  </ul>
)

const PrimaryNavigation = styled(({
  globals,
  atoms,
  molecules,
  organisms,
  templates,
  pages,
  ...props
}) => {
  return (
    <nav {...props}>
      {globals && <li>{renderLink('globals')}{renderList(globals)}</li>}
      {atoms && <li>{renderLink('atoms')}{renderList(atoms)}</li>}
      {molecules && <li>{renderLink('molecules')}{renderList(molecules)}</li>}
      {organisms && <li>{renderLink('organisms')}{renderList(organisms)}</li>}
      {templates && <li>{renderLink('templates')}{renderList(templates)}</li>}
      {pages && <li>{renderLink('pages')}{renderList(pages)}</li>}
    </nav>
  )
})`
  display: inline-block;
  font-family: ${fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  color: ${colors.grayscale[0]};
  list-style: none;
  text-align: right;

  & .list {
    list-style: none;
    padding-left: 0;
    line-height: 1.3rem;
  }

  & .link {
    text-transform: uppercase;
  }

  & .inner-link {
    font-weight: 300;
    color: ${colors.grayscale[1]}
  }
`

PrimaryNavigation.propTypes = {
  globals: PropTypes.array,
  atoms: PropTypes.array,
  molecules: PropTypes.array,
  organisms: PropTypes.array,
  templates: PropTypes.array,
  pages: PropTypes.array
}

export default PrimaryNavigation
