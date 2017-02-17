import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromEntities, fromStatus } from 'store/selectors'
import { postRead, POST_READ } from 'store/actions'

import { Post } from 'components'

class PostContainer extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    const { post, loading } = this.props
    return <Post loading={loading} {...post} />
  }
}

const mapStateToProps = (state, { id }) => {
  return ({
    post: fromEntities.getDetail(state, 'post', id),
    loading: fromStatus.isLoading(state, POST_READ)
  })
}

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => dispatch(postRead.request(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
