import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Block = styled.div`
  font-family: ${font('primary')};
  background-color: ${ifProp('transparent', 'transparent', palette(0, true))};
  color: ${palette({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool
}

Block.defaultProps = {
  palette: 'grayscale'
}

export default Block
