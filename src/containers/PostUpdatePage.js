import React, { Component, PropTypes } from 'react'
import submit from 'redux-form-submit'
import { postRead } from 'store/actions'

import { PostUpdatePage } from 'components'
import { config } from './PostForm'

class PostUpdatePageContainer extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  static post({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  static get({ store, ...props }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postRead.request(props.params.id, resolve, reject))
    })
  }

  render() {
    const props = this.props
    return <PostUpdatePage id={props.params.id} />
  }
}

export default PostUpdatePageContainer
