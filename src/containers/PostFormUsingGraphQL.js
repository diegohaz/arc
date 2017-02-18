import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'

import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'
import { handleError } from 'services/logger/index'

class PostFormUsingGraphQL extends Component {

  componentWillMount() {
  }

  onSubmit(props) {

    this.props
      .createNewPost(props)
      .catch((error) => {
        handleError(error)
      })

  }

  render() {

    const { handleSubmit } = this.props

    return (
      <PostForm handleSubmit={handleSubmit(formData => this.onSubmit(formData))} />
    )

  }
}

PostFormUsingGraphQL.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  createNewPost: React.PropTypes.func.isRequired,
}

PostFormUsingGraphQL.contextTypes = {
  router: React.PropTypes.object
}

const validate = createValidator({
  title: [required],
  body: [required]
})

const newPostQuery = gql`
mutation newPostQuery($title: String, $body: String) {
  newPost(title: $title, body: $body) {
    id
    title
    body
  }
}
`

const fetchPostsQuery = gql`
query fetchPostsQuery {
posts {
    id
    title
    body
  }
}`

export default compose(
  reduxForm({
    form: 'NewPostForm',
    fields: ['title', 'body'],
    validate
  }),
  graphql(fetchPostsQuery),
  graphql(newPostQuery, {
    props: ({ mutate }) => ({
      createNewPost: ({ title, body }) => mutate({
        variables: { title, body },
        refetchQueries: [{
          query: fetchPostsQuery
        }]
      })
    }),
  })
)(PostFormUsingGraphQL)

