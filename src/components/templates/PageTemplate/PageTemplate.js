import React, { PropTypes, Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

const Main = styled.main`
  padding-top: 3.75rem;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Hero = styled.section``

const Content = styled.section`
  margin: 2rem 0;
`

const Footer = styled.footer``

class PageTemplate extends Component {
  static propTypes = {
    header: PropTypes.any.isRequired,
    hero: PropTypes.any,
    children: PropTypes.any.isRequired,
    footer: PropTypes.any.isRequired
  }

  componentDidMount () {
    injectGlobal`
      body {
        margin: 0;
      }
    `
  }

  render () {
    const { header, hero, children, footer, ...props } = this.props
    return (
      <Main {...props}>
        <Header>{header}</Header>
        {hero && <Hero>{hero}</Hero>}
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Main>
    )
  }
}

export default PageTemplate
