import React from 'react'
import styled from 'styled-components'

import {
  Feature, Link, Heading, Paragraph,
} from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Basic stack</StyledHeading>
    <Description>
      It includes everything necessary to build a tipical web app with focus on productivity and developer experience.
      <br />
      <Link href="https://github.com/diegohaz/arc/wiki/Workflow">Learn more about the recomended workflow</Link>
    </Description>
    <Grid>
      <StyledFeature
        icon="react"
        link="https://facebook.github.io/react"
        title="React"
        code="<MyComponent attr='value' />"
      >
        The Facebook&apos;s JavaScript library for building user interfaces using components.
      </StyledFeature>
      <StyledFeature
        icon="react-router"
        link="https://github.com/ReactTraining/react-router"
        title="React Router"
        code="<Route path='/sample-page' />"
      >
        The most popular declarative routing library for React and React Native.
      </StyledFeature>
      <StyledFeature
        icon="webpack"
        link="https://webpack.github.io/"
        title="Webpack"
        code="npm run build"
      >
        The awesome module bundler with
        {' '}
        <Link href="https://webpack.github.io/docs/hot-module-replacement.html">Hot Module Replacement</Link>
        {' '}
enabled.
      </StyledFeature>
      <StyledFeature
        icon="jest"
        link="https://facebook.github.io/jest"
        title="Jest"
        code="npm run test"
      >
        The great testing framework used by Facebook to test all their Javascript code.
      </StyledFeature>
    </Grid>
    <StyledHeading>Optional features</StyledHeading>
    <Description>
      Features separated into another branches so you can use them only if you need to.
    </Description>
    <Grid>
      <StyledFeature
        icon="redux"
        link="https://github.com/diegohaz/arc/tree/redux"
        title="Redux"
        code="git clone -b redux https://github.com/diegohaz/arc my-app"
      >
        The predictable state container for JavaScript apps.
      </StyledFeature>
      <StyledFeature
        icon="dist"
        link="https://github.com/diegohaz/arc/tree/redux-ssr"
        title="Server Side Rendering"
        code="git clone -b redux-ssr https://github.com/diegohaz/arc my-app"
      >
        Write once and run on both server and client.
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
