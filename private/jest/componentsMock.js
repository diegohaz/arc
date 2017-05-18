// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import PropTypes from 'prop-types'

module.exports = new Proxy({}, {
  get: (target, property) => {
    const Mock = props => <span>{props.children}</span>

    Mock.displayName = property
    Mock.propTypes = {
      children: PropTypes.any,
    }

    return Mock
  },
})
