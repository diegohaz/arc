import { makeExecutableSchema } from 'graphql-tools'

import api from 'services/api'
import { resolvers as postResolvers, schema as postSchema } from './post'

const rootSchema = `
  
    type RootQuery {
      ping: String,
      post(id: String): Post,
      posts: [Post]
    }

    type RootMutation {
        newPost(title: String, body: String): Post,
        deletePost(id: Int): Int,
        induceError: String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

const rootResolvers = {

  RootQuery: {
    ping() {
      return 'pong!'
    },
    post(_, { id }) {
      return api.get(`/posts/${id}`).then(
        (post) => {
          return post.data
        }
      )
    },
    posts() {
      return api.get('/posts').then(
        (posts) => {
          return posts.data
        }
      )
    }
  },

  RootMutation: {
    newPost(_, { title, body }) {
      return api.post('/posts', {
        title,
        body
      }).then(
        (post) => {
          return post.data
        }
      )
    },
    deletePost(_, { id }) {
      return api.get(`/posts/${id}`).then(
        () => id
      )
    },
    induceError() {
      throw new Error('Custom error message')
    }
  }

}

const schema = [
  rootSchema,
  postSchema
]

const resolvers = {
  ...rootResolvers,
  ...postResolvers
}

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default executableSchema
