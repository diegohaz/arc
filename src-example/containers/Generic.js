import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromAsync } from 'store/selectors'

const GenericContainer = ({ loading }) => <div className={loading ? 'loading' : ''} />

GenericContainer.propTypes = {
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  loading: fromAsync.isPending(state),
})

export default connect(mapStateToProps)(GenericContainer)
