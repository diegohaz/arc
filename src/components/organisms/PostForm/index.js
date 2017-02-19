import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const PostForm = ({ id, handleSubmit, submitting }) => {
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Heading level={2}>{id ? 'Update' : 'Create'} a post</Heading>
      <Field name="_csrf" type="hidden" component="input" />
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" component={ReduxField} />
      <Button type="submit" disabled={submitting}>{id ? 'Update' : 'Create'}</Button>
    </Form>
  )
}

PostForm.propTypes = {
  id: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
}

PostForm.defaultProps = {
  id: null
}

export default PostForm
