import React, { PropTypes } from 'react'
import Radium from 'radium'

import { fonts, colors, Link } from 'components'

const renderLink = (item, style) =>
  <Link href={`#${item}`} style={[styles.link, style]}>{item}</Link>

const renderList = (items) => (
  <ul style={styles.items}>
    {items.map((item, i) => <li key={i}>{renderLink(item, styles.innerLink)}</li>)}
  </ul>
)
const PrimaryNavigation = ({
  style,
  globals,
  atoms,
  molecules,
  organisms,
  templates,
  pages,
  ...props
}) => {
  return (
    <nav {...props} style={[styles.base, style]}>
      {globals && <li>{renderLink('globals')}{renderList(globals)}</li>}
      {atoms && <li>{renderLink('atoms')}{renderList(atoms)}</li>}
      {molecules && <li>{renderLink('molecules')}{renderList(molecules)}</li>}
      {organisms && <li>{renderLink('organisms')}{renderList(organisms)}</li>}
      {templates && <li>{renderLink('templates')}{renderList(templates)}</li>}
      {pages && <li>{renderLink('pages')}{renderList(pages)}</li>}
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  style: PropTypes.object,
  globals: PropTypes.array,
  atoms: PropTypes.array,
  molecules: PropTypes.array,
  organisms: PropTypes.array,
  templates: PropTypes.array,
  pages: PropTypes.array
}

const styles = {
  base: {
    display: 'inline-block',
    fontFamily: fonts.primary,
    margin: '1rem 0',
    paddingLeft: '1.6rem',
    color: colors.grayscale[0],
    listStyle: 'none',
    textAlign: 'right'
  },
  items: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '1.3rem'
  },
  link: {
    textTransform: 'uppercase'
  },
  innerLink: {
    textTransform: 'none',
    fontWeight: 300,
    color: colors.grayscale[1]
  }
}

export default Radium(PrimaryNavigation)
