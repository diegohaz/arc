import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block, Paragraph, IconLink, IconButton, LogoImage, Tooltip } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 700px;
  padding: 2rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3)}
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
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <Logo />
      <Text>
        <strong>ARc</strong> is a <IconLink reverse icon="react" href="https://facebook.github.io/react/">React</IconLink> starter kit based on the <IconLink reverse icon="atomic-design" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</IconLink> methodology. It&apos;s <strong>progressive</strong>, which means that you can start with the basic boilerplate and try the other features when you are comfortable.
      </Text>
      <Tooltip data-title="Just a fancy tooltip 😊" reverse>
        <StyledIconButton
          icon="github"
          href="https://github.com/diegohaz/arc"
          height={50}
          transparent
          reverse
        >
          View on GitHub
        </StyledIconButton>
      </Tooltip>
    </Wrapper>
  )
}

export default Hero
