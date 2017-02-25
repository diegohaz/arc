import React, { Component } from 'react'
import submit from 'redux-form-submit'
import { postListReadRequest } from 'store/actions'

import { SamplePage } from 'components'
import { config } from './PostForm'

class SamplePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body)),
    ])
  }

  static get({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postListReadRequest({ limit: 15 }, resolve, reject))
    })
  }

  render() {
    return <SamplePage />
  }
}

export default SamplePageContainer
