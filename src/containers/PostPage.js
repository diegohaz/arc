import React, { Component } from 'react'
import { postRead } from 'store/actions'

import { PostPage } from 'components'

class PostPageContainer extends Component {
  static get({ store, ...props }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postRead.request(props.params.id, resolve, reject))
    })
  }

  render() {
    const props = this.props
    return <PostPage id={props.params.id} />
  }
}

export default PostPageContainer
