import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, Paragraph, Link, IconButton } from 'components'

const renderGitHubButton = (type, size = 'large') => {
  const baseUrl = 'https://ghbtns.com/github-btn.html?user=diegohaz&repo=arc&count=true'
  const url = `${baseUrl}&type=${type}&size=${size}`
  return <iframe style={{ textAlign: 'center' }} src={url} frameBorder="0" scrolling="0" width="160px" height="30px" />
}

const Hero = ({ style, ...props }) => {
  return (
    <div {...props} style={[styles.base, style]}>
      {renderGitHubButton('star')}
      <Paragraph style={styles.paragraph}>
        <strong>ARc</strong> (<b>A</b>tomic <b>R</b>ea<b>c</b>t) can be a progressive boilerplate, as much as a set of components or a project's structure proposal based on <Link href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</Link>. You choose how to use it: from a single component to the whole philosophy.
      </Paragraph>
      <IconButton icon="github" href="https://github.com/diegohaz/arc">View on GitHub</IconButton>
    </div>
  )
}

Hero.propTypes = {
  style: PropTypes.object
}

const styles = {
  base: {
    padding: '2rem 6rem',
    backgroundColor: [ ...colors.grayscale ].reverse()[1],
    textAlign: 'center',
    '@media screen and (max-width: 640px)': {
      padding: '1rem'
    }
  },
  paragraph: {
    maxWidth: 600,
    margin: '2rem auto'
  }
}

export default Radium(Hero)
