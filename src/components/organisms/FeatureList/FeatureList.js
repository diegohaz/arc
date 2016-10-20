import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading } from 'components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 920px;
`

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
`

const FeatureList = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledHeading>Basic Stack includes</StyledHeading>
      <Grid>
        <StyledFeature
          icon="react"
          link="https://facebook.github.io/react"
          title="React">
          The amazing Facebook's UI library.
        </StyledFeature>
        <StyledFeature
          icon="react-router"
          link="https://react-router.now.sh/"
          title="React Router 4">
          The next generation of the declarative routing for React.
        </StyledFeature>
        <StyledFeature
          icon="webpack"
          link="https://webpack.github.io/"
          title="Webpack">
          The awesome module bundler with <Link href="https://webpack.github.io/docs/hot-module-replacement.html">Hot Module Replacement</Link> enabled.
        </StyledFeature>
        <StyledFeature
          icon="jest"
          link="https://facebook.github.io/jest"
          title="Jest">
          The great testing framework used by Facebook to test all their Javascript code.
        </StyledFeature>
      </Grid>
      <StyledHeading>Optional features</StyledHeading>
      <Grid>
        <StyledFeature
          icon="redux"
          link="http://redux.js.org"
          title="Redux"
          soon>
          The predictable state container for JavaScript apps.
        </StyledFeature>
        <StyledFeature
          icon="dist"
          link="https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md"
          title="Server Side Rendering"
          soon>
          Write once and run both on the server and client.
        </StyledFeature>
        <StyledFeature
          icon="node"
          link="http://expressjs.com/"
          title="Express RESTful API"
          soon>
          Write a backend with NodeJS, Express and MongoDB to your React app.
        </StyledFeature>
        <StyledFeature
          icon="yeoman"
          link="http://yeoman.io"
          title="Yeoman Generator"
          soon>
          Generate components, redux stores, API endpoints and the entire app through command line.
        </StyledFeature>
      </Grid>
    </Wrapper>
  )
}

export default FeatureList
