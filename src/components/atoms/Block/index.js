import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor, ifProps } from 'arc-theme'

const Block = styled.div`
  font-family: ${font('primary')};
  background-color: ${ifProps('transparent', 'transparent', reverseColor(0))};
  color: ${color({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Block.defaultProps = {
  color: 'grayscale'
}

export default Block
