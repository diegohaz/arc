import React, { PropTypes } from 'react'
import Radium from 'radium'

import { Heading, IconLink, HorizontalRule } from 'components'

const components = {
  globals: Object.keys(require('components/globals')),
  atoms: Object.keys(require('components/atoms')),
  molecules: Object.keys(require('components/molecules')),
  organisms: Object.keys(require('components/organisms')),
  templates: Object.keys(require('components/templates')),
  pages: Object.keys(require('components/pages'))
}

const getType = (title) => {
  let type
  Object.keys(components).forEach((t) => {
    type = components[t].indexOf(title) >= 0 ? t : type
  })
  return type
}

const ComponentSpec = ({ title, path, style, children, ...props }) => {
  const type = getType(title)
  const baseUrl = 'https://github.com/diegohaz/arc/tree/master/src/components/'
  const srcUrl = path ? `${baseUrl}${path}` : `${baseUrl}${type}/${title}`
  return (
    <article id={title} {...props} style={[styles.base, style]}>
      <header style={styles.header}>
        <Heading level={2} style={styles.title}>{type}/{title}</Heading>
        <IconLink icon="code" href={srcUrl} responsive>source code</IconLink>
        <IconLink icon="arrow-top" href="#globals" style={{ marginLeft: '1rem' }} responsive>
          back to top
        </IconLink>
      </header>
      <HorizontalRule />
      <div style={styles.content}>{children}</div>
    </article>
  )
}

ComponentSpec.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

const styles = {
  base: {
    padding: '1rem',
    margin: '0 0 1rem',
    width: '100%',
    boxSizing: 'border-box'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    flex: '1',
    margin: '0',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
}

export default Radium(ComponentSpec)
