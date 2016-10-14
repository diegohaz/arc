import React, { PropTypes } from 'react'
import styled from 'styled-components'

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

const ComponentSpec = styled(({ title, path, children, ...props }) => {
  const type = getType(title)
  const baseUrl = 'https://github.com/diegohaz/arc/tree/master/src/components/'
  const srcUrl = path ? `${baseUrl}${path}` : `${baseUrl}${type}/${title}`
  return (
    <article id={title} {...props}>
      <header>
        <Heading level={2}>{type}/{title}</Heading>
        <IconLink icon="code" href={srcUrl} responsive>source code</IconLink>
        <IconLink icon="arrow-top" href="#globals" style={{ marginLeft: '1rem' }} responsive>
          back to top
        </IconLink>
      </header>
      <HorizontalRule />
      <div>{children}</div>
    </article>
  )
})`
  padding: 1rem;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;

  & > header {
    display: flex;
    align-items: center;
    width: 100%;

      & > h2 {
        flex: 1;
        margin: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
  }
`

ComponentSpec.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  children: PropTypes.any
}

export default ComponentSpec
