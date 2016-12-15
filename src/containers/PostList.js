import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromPost, fromStatus } from 'store/selectors'
import { postList, POST_LIST } from 'store/actions'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired
  }

  static defaultProps = {
    limit: 20
  }

  componentDidMount () {
    this.props.request()
  }

  render () {
    const { list, loading } = this.props
    return <PostList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromPost.getList(state),
  loading: fromStatus.isLoading(state, POST_LIST)
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(postList.request(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
