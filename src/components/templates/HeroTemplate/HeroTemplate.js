import React, { PropTypes } from 'react'
import styled, { injectGlobal } from 'styled-components'

const Logo = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const Hero = styled.div`
  margin: 1rem 0;
`

const Middle = styled.section`
  max-width: 960px;
  display: flex;
  margin: 0 auto;
`

const Nav = styled.div`
  margin-right: 2rem;
  @media screen and (max-width: 640px) {
    display: none;
  }
`

const Content = styled.div`
  flex: 1;
  width: 100%;
`

const HeroTemplate = ({ logo, hero, nav, children, footer, ...props }) => {
  injectGlobal`
    body {
      margin: 0;
    }
  `
  return (
    <main {...props}>
      <header>
        <Logo>{logo}</Logo>
        <Hero>{hero}</Hero>
      </header>
      <Middle>
        <Nav>{nav}</Nav>
        <Content>{children}</Content>
      </Middle>
      <section>{footer}</section>
    </main>
  )
}

HeroTemplate.propTypes = {
  logo: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  nav: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired
}

export default HeroTemplate
