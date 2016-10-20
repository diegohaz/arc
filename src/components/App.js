import React from 'react'
import { Match } from 'react-router'

import { HomePage } from 'components'

const App = () => {
  return (
    <div>
      <Match pattern="/" component={HomePage} />
    </div>
  )
}

export default App
