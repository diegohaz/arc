import React, { Component } from 'react'
import submit from 'redux-form-submit'
import { postList } from 'store/actions'

import { PostCreatePage } from 'components'
import { config } from './PostForm'

class PostCreatePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  static get({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postList.request(15, resolve, reject))
    })
  }

  render() {
    return <PostCreatePage />
  }
}

export default PostCreatePageContainer
