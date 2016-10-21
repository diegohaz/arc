import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { colors, fonts } from 'components/globals'

const styles = css`
  font-family: ${fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${colors.grayscale[0]};
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any
}

export default List
