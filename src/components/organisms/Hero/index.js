import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, IconLink, IconButton, LogoImage } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 700px;
  padding: 2rem 6rem;
  box-sizing: border-box;
  background-color: ${colors.grayscale[0]};
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Text = styled(Paragraph)`
  color: ${[ ...colors.grayscale ].reverse()[3]};
  margin: 3rem auto;
  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const Logo = styled(LogoImage)`
  flex: 1;
  width: 100%;
  min-height: 1px;
`

const StyledIconButton = styled(IconButton)`
  flex: none;
  font-size: 1.2rem;
`

const Hero = (props) => {
  return (
    <Wrapper {...props}>
      <Logo />
      <Text>
        <strong>ARc</strong> is a <IconLink light icon="react" href="https://facebook.github.io/react/">React</IconLink> starter kit based on the <IconLink light icon="atomic-design" color="#fff" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</IconLink> methodology. It's <strong>progressive</strong>, which means that you can start with the basic boilerplate and try the other features when you are comfortable.
      </Text>
      <StyledIconButton
        light
        transparent
        icon="github"
        href="https://github.com/diegohaz/arc">
        View on GitHub
      </StyledIconButton>
    </Wrapper>
  )
}

export default Hero
