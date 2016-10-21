import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Match, Miss } from 'react-router'

import { HomePage } from 'components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

class App extends Component {
  componentDidMount () {
    injectGlobal`
      html, body, #app {
        margin: 0;
        width: 100%;
        height: 100%;
      }
    `
  }

  render () {
    return (
      <Wrapper>
        <Match pattern="/" exactly component={HomePage} />
        <Miss component={HomePage} />
      </Wrapper>
    )
  }
}

export default App
