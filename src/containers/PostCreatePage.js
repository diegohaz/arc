import React, { Component } from 'react'
import submit from 'redux-form-submit'

import { PostCreatePage } from 'components'
import { config } from './PostForm'

class PostCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  render() {
    return <PostCreatePage />
  }
}

export default PostCreatePageContainer
