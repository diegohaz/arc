import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading } from 'components'

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
    <div {...props}>
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
          link="https://github.com/ReactTraining/react-router"
          title="React Router">
          The declarative routing library for React.
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
          link="https://github.com/diegohaz/arc/tree/redux"
          title="Redux">
          The predictable state container for JavaScript apps.
        </StyledFeature>
        <StyledFeature
          icon="dist"
          link="https://github.com/diegohaz/arc/tree/universal-redux"
          title="Server Side Rendering">
          Write once and run both on the server and client (everything works with javascript disabled, even the forms).
        </StyledFeature>
        <StyledFeature
          icon="node"
          link="https://github.com/diegohaz/arc/tree/fullstack"
          title="RESTful API">
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
    </div>
  )
}

export default FeatureList
