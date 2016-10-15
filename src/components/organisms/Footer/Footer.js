import React from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Paragraph, Link } from 'components'

const Footer = styled((props) => {
  return (
    <footer {...props}>
      <Paragraph className="credits">
        Made with ❤️ by <Link href="https://github.com/diegohaz">Haz</Link>
      </Paragraph>
    </footer>
  )
})`
  background-color: ${[ ...colors.grayscale ].reverse()[1]};
  padding: 2rem;

  & .credits {
    text-align: center;
    margin: 0;
  }
`

export default Footer
