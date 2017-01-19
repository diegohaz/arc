import React, { PropTypes } from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
