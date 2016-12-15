import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus } from 'store/selectors'

class GenericContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool
  }

  render () {
    const { loading } = this.props
    return <div className={loading ? 'loading' : ''} />
  }
}

const mapStateToProps = (state) => ({
  loading: fromStatus.isLoading(state)
})

export default connect(mapStateToProps)(GenericContainer)
