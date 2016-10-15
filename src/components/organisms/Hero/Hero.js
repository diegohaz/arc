import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, Link, IconButton } from 'components'

const Text = styled(Paragraph)`
  max-width: 600px;
  margin: 2rem auto;
`

const Hero = styled((props) => {
  return (
    <div {...props}>
      <Text>
        <strong>ARc</strong> (<b>A</b>tomic <b>R</b>ea<b>c</b>t) can be a progressive boilerplate, as much as a set of components or a project's structure proposal based on <Link href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</Link>. You choose how to use it: from a single component to the whole philosophy.
      </Text>
      <IconButton icon="github" href="https://github.com/diegohaz/arc">View on GitHub</IconButton>
    </div>
  )
})`
  padding: 2rem 6rem;
  background-color: ${[ ...colors.grayscale ].reverse()[1]};
  text-align: center;

  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

export default Hero
