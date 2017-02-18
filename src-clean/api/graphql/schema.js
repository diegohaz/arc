import { makeExecutableSchema } from 'graphql-tools'

const rootSchema = `
  
    type RootQuery {
      ping: String
    }

    type RootMutation {
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
    }
  },

  RootMutation: {
    induceError() {
      throw new Error('Custom error message')
    }
  }

}

const schema = [
  rootSchema,
]

const resolvers = {
  ...rootResolvers,
}

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default executableSchema
