import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { fromForm } from 'store/selectors'
import { postCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(postCreateRequest(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required],
})

const mapStateToProps = (state) => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

export const config = {
  form: 'PostForm',
  fields: ['title', 'body'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(PostFormContainer))
