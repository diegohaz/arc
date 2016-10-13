import React, { PropTypes } from 'react'
import Radium, { Style } from 'radium'

const HeroTemplate = ({ logo, hero, nav, children, footer }) => {
  return (
    <main style={styles.main}>
      <Style scopeSelector="body" rules={{ margin: 0 }} />
      <header style={styles.header}>
        <div style={styles.logo}>{logo}</div>
        <div style={styles.hero}>{hero}</div>
      </header>
      <section style={styles.body}>
        <div style={styles.nav}>{nav}</div>
        <div style={styles.content}>{children}</div>
      </section>
      <section style={styles.footer}>{footer}</section>
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

const styles = {
  logo: {
    marginTop: '1rem',
    textAlign: 'center'
  },
  hero: {
    margin: '1rem 0'
  },
  body: {
    maxWidth: 960,
    display: 'flex',
    margin: '0 auto'
  },
  nav: {
    marginRight: '2rem',
    '@media screen and (max-width: 640px)': {
      display: 'none'
    }
  },
  content: {
    flex: 1,
    width: '100%'
  }
}

export default Radium(HeroTemplate)
