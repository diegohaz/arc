import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromResource } from 'store/selectors'
import { resourceListReadRequest } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    getData: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    this.props.getData()
  }

  render() {
    const { posts, comments, loading, failed } = this.props
    return <PostList {...{ posts, comments, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  posts: fromEntities.getList(state, 'posts', fromResource.getList(state, 'posts')),
  comments: fromEntities.getList(state, 'comments', fromResource.getList(state, 'comments')),
  loading: isPending(state, ['postsListRead', 'commentsListRead']),
  failed: hasFailed(state, ['postsListRead', 'commentsListRead']),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  getData: () => {
    dispatch(resourceListReadRequest('posts', { _limit: limit }))
    dispatch(resourceListReadRequest('comments', { _limit: limit }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
