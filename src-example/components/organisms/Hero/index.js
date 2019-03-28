import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  PreformattedText,
  Heading,
  Tooltip,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={265} />
          <ButtonGroup>
            <Tooltip reverse data-title="Just a fancy tooltip 😄">
              <IconButton icon="github" href="https://github.com/diegohaz/arc">GitHub</IconButton>
            </Tooltip>
            <Tooltip reverse data-title="Another tooltip aligned differently" align="end" position="bottom">
              <IconButton icon="docs" href="https://github.com/diegohaz/arc/wiki">Docs</IconButton>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            <strong>ARc</strong>
            {' '}
is a
            <IconLink reverse icon="react" href="https://facebook.github.io/react/">React</IconLink>
            {' '}
starter kit based on the
            <IconLink reverse icon="atomic-design" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</IconLink>
            {' '}
methodology. It&apos;s
            <strong>progressive</strong>
, which means that you can start with the basic boilerplate and try the other features when you are comfortable.
          </Text>
          <Instructions>
            <Heading level={2} reverse>Install</Heading>
            <PreformattedText block reverse wrapped>
              git clone -b master https://github.com/diegohaz/arc my-app
            </PreformattedText>
            <IconLink
              icon="docs"
              right
              reverse
              href="https://github.com/diegohaz/arc/wiki/Setup"
            >
              Learn more
            </IconLink>
          </Instructions>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
