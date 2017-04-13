import React from 'react'
import { reduxForm } from 'redux-form'
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

export default reduxForm({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(PostFormContainer)
