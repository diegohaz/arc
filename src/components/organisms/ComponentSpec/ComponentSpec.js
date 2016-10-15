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

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`

const Title = styled(Heading)`
  flex: 1;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Article = styled.article`
  padding: 1rem;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;
`

const ComponentSpec = ({ title, path, children, ...props }) => {
  const type = getType(title)
  const baseUrl = 'https://github.com/diegohaz/arc/tree/master/src/components/'
  const srcUrl = path ? `${baseUrl}${path}` : `${baseUrl}${type}/${title}`
  return (
    <Article id={title} {...props}>
      <Header>
        <Title level={2}>{type}/{title}</Title>
        <IconLink icon="code" href={srcUrl} responsive>source code</IconLink>
        <IconLink icon="arrow-top" href="#globals" style={{ marginLeft: '1rem' }} responsive>
          back to top
        </IconLink>
      </Header>
      <HorizontalRule />
      <div>{children}</div>
    </Article>
  )
}

ComponentSpec.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  children: PropTypes.any
}

export default ComponentSpec
