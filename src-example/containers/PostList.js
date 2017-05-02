import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromEntities, fromPost, fromStatus } from 'store/selectors'
import { postListReadRequest, POST_LIST_READ } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    readList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    this.props.readList()
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
  readList: () => dispatch(postListReadRequest({ _limit: limit })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
