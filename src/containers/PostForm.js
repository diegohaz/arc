import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import merge from 'lodash/merge'
import { fromForm, fromEntities } from 'store/selectors'
import { postCreate, postRead, postUpdate } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'

class PostFormContainer extends Component {
  static propTypes = {
    id: PropTypes.any,
    request: PropTypes.func.isRequired
  }

  componentDidMount() {
    if (this.props.id) {
      this.props.request()
    }
  }

  render() {
    const props = this.props
    return <PostForm {...props} />
  }
}

const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  if (data.id) {
    return dispatch(postUpdate.request(state.initialValues, data, resolve, reject))
  }
  return dispatch(postCreate.request(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required]
})

const mapStateToProps = (state, { id }) => {
  if (id) {
    return ({
      initialValues: merge(
        fromEntities.getDetail(state, 'post', id),
        {
          _csrf: fromForm.getCsrfToken(state)
        }
      )
    })
  }
  return ({
    initialValues: {
      _csrf: fromForm.getCsrfToken(state)
    }
  })
}

const mapDispatchToProps = (dispatch, { id }) => ({
  request: () => dispatch(postRead.request(id))
})

export const config = {
  form: 'PostForm',
  fields: ['title', 'body'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(PostFormContainer))
