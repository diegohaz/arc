import React, { PropTypes } from 'react'
import styled from 'styled-components'

const HeroTemplate = styled(({ logo, hero, nav, children, footer, ...props }) => {
  return (
    <main {...props}>
      <header>
        <div className="logo">{logo}</div>
        <div className="hero">{hero}</div>
      </header>
      <section className="middle">
        <div className="nav">{nav}</div>
        <div className="content">{children}</div>
      </section>
      <section>{footer}</section>
    </main>
  )
})`
  body {
    margin: 0;
  }

  & .logo {
    margin-top: 1rem;
    text-align: center;
  }

  & .hero {
    margin: 1rem 0;
  }

  & .middle {
    max-width: 960px;
    display: flex;
    margin: 0 auto;
  }

  & .nav {
    margin-right: 2rem;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  & .content {
    flex: 1;
  }
`

HeroTemplate.propTypes = {
  logo: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  nav: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired
}

export default HeroTemplate
