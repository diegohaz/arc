import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { fromEntities, fromPost, fromStatus } from 'store/selectors'
import { postListReadRequest, POST_LIST_READ } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    readList: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    const { done } = this.props
    this.props.readList(done)
  }

  render() {
    const { list, loading } = this.props
    return <PostList {...{ list, loading }} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'post', fromPost.getList(state)),
  loading: fromStatus.isLoading(state, POST_LIST_READ),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  readList: done => dispatch(postListReadRequest({ _limit: limit }, done, done)),
})

const withDone = fetchState(null, actions => ({ done: actions.done }))

export default withDone(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
