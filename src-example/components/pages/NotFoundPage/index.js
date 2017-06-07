import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, Header, Footer, Heading } from 'components'

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404
  }

  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
}

export default NotFoundPage
