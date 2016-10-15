import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, Link } from 'components'

const Credits = styled(Paragraph)`
  text-align: center;
  margin: 0;
`

const Footer = styled((props) => {
  return (
    <footer {...props}>
      <Credits>
        Made with ❤️ by <Link href="https://github.com/diegohaz">Haz</Link>
      </Credits>
    </footer>
  )
})`
  background-color: ${[ ...colors.grayscale ].reverse()[1]};
  padding: 2rem;
`

export default Footer
