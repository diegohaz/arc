import React, { PropTypes } from 'react'

const Mock = (props = {}) => <span>{props.children}</span>

Mock.displayName = 'Mock'
Mock.propTypes = {
  children: PropTypes.any
}

exports = module.exports = new Proxy({}, {
  get: () => Mock
})
