import React from 'react'
import { reduxForm } from 'redux-form'
import { resourceCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'

const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch) => dispatch(resourceCreateRequest('posts', data))

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
