import React from 'react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import logo from 'url-loader!./graphql.svg'

function GraphQLImage(props) {
  return (
    <img alt="GraphQL Logo" {...props} src={logo} />
  )
}

export default GraphQLImage
