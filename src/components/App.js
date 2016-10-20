import React from 'react'
import { Match, Miss } from 'react-router'

import { HomePage, SamplePage } from 'components'

const App = () => {
  return (
    <div>
      <Match pattern="/" exactly component={HomePage} />
      <Match pattern="/sample-page" component={SamplePage} />
      <Miss component={HomePage} />
    </div>
  )
}

export default App
