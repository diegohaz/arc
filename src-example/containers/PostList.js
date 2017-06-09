import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchState } from 'react-router-server'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromResource } from 'store/selectors'
import { resourceListReadRequest } from 'store/actions'
import { isBrowser, isServer } from 'config'

import { PostList } from 'components'

class PostListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    limit: PropTypes.number,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    readList: PropTypes.func.isRequired,
    hasServerState: PropTypes.bool,
    setServerState: PropTypes.func.isRequired,
    cleanServerState: PropTypes.func.isRequired,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    const { readList, hasServerState, setServerState, cleanServerState } = this.props

    if (!hasServerState) {
      if (isServer) {
        readList().then(setServerState, setServerState)
      } else {
        readList()
      }
    } else if (isBrowser) {
      cleanServerState()
    }
  }

  render() {
    const { list, loading, failed } = this.props
    return <PostList {...{ list, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  list: fromEntities.getList(state, 'posts', fromResource.getList(state, 'posts')),
  loading: isPending(state, 'postsListRead'),
  failed: hasFailed(state, 'postsListRead'),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  readList: () => dispatch(resourceListReadRequest('posts', { _limit: limit })),
})

const withServerState = fetchState(
  state => ({
    hasServerState: !!state.data,
  }),
  actions => ({
    setServerState: data => actions.done({ data }),
    cleanServerState: () => actions.done(),
  })
)

export default withServerState(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
