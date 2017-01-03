import React from 'react'
import styled from 'styled-components'
import { reverseColor } from 'arc-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${reverseColor('grayscale', 1)};
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <Icon icon="heart" /> by <Link href="https://github.com/diegohaz">Haz</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
