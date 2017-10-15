import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: ${palette(1, true)};
  text-align: center;
`

class CodeSponsor extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = 'https://app.codesponsor.io/scripts/-rubqJ_XsKW34vwj9WYShA?theme=light&height=150&width=330'
    script.async = true

    document.body.appendChild(script)
  }

  render() {
    return (
      <Wrapper id="code-sponsor-widget" {...this.props} />
    )
  }
}

CodeSponsor.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

CodeSponsor.defaultProps = {
  palette: 'grayscale',
}

export default CodeSponsor
