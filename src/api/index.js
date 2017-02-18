import post from 'api/post'
import { Router } from 'express'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import { schema, mocks } from './graphql'

const router = new Router()

router.use('/posts', post)

// Interactive GraphQL browser
export const graphQLRouter = new Router()
router.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// GraphQL service
router.use('/graphql', graphqlExpress({
  graphiql: true,
  pretty: true,
  schema,
  mocks,
  allowUndefinedInResolve: false
}))

export default router
