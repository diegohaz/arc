import React from 'react'
import { connect } from 'react-redux'
import { fromSocial } from 'store/selectors'
import { modalShow, socialLogout } from 'store/actions'

import { UserButton } from 'components'

const UserButtonContainer = props => <UserButton {...props} />

const mapStateToProps = state => ({
  user: fromSocial.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(modalShow('login')),
  onLogout: () => dispatch(socialLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)
