import React from 'react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import logo from 'url!./logo.svg'

const LogoImage = props => <img alt="Logo" {...props} src={logo} />

export default LogoImage
