import React, { Component } from 'react'
import { postList } from 'store/actions'

import { PostsPage } from 'components'

class PostsPageContainer extends Component {
  static get({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postList.request(15, resolve, reject))
    })
  }

  render() {
    return <PostsPage />
  }
}

export default PostsPageContainer
