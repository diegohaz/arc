import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, Link } from 'components'

const Credits = styled(Paragraph)`
  text-align: center;
  margin: 0;
`

const StyledFooter = styled.footer`
  background-color: ${([ ...colors.grayscale ].reverse()[1])};
  padding: 2rem;
`

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <Credits>
        Made with ❤️ by <Link href="https://github.com/diegohaz">Haz</Link>
      </Credits>
    </StyledFooter>
  )
}

export default Footer
