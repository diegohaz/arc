import { reduxForm } from 'redux-form'
import { postCreate } from 'store'
import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(postCreate.request(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required]
})

export default reduxForm({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit,
  validate
})(PostForm)
