// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Hero, Footer, FeatureList, CodeSponsor } from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      hero={<Hero />}
      sponsor={<CodeSponsor />}
      footer={<Footer />}
    >
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
