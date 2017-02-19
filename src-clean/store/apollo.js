import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client'
import { browser, graphqlUrl, serverGraphqlUrl } from 'config'

import logger from 'services/logger'

// Client-side Apollo client
function createBrowserClient() {

  const networkInterface = createBatchingNetworkInterface({
    uri: graphqlUrl,
    batchInterval: 10,
    opts: {
      credentials: 'same-origin', // Important for CSRF
    }
  })

  // Sample error handling middleware
  networkInterface.useAfter([{
    applyAfterware({ response }, next) {
      if (response.errors) {
        if (typeof window !== 'undefined') {
          logger.error(JSON.stringify(response.errors))

          // TODO: disable this in production
          // alert(`There was an error in your GraphQL request: ${response.errors[0].message}`)
        }
      }
      next()
    }
  }
  ])

  return new ApolloClient({
    networkInterface,
    shouldBatch: true,
    dataIdFromObject: obj => obj.id
  })

}

// Server-side Apollo client
function createServerSideClient() {

  const ssrNetworkInterface = createBatchingNetworkInterface({
    uri: serverGraphqlUrl,
    batchInterval: 10,
    opts: {
      credentials: 'same-origin', // Important for CSRF
    },
  })

  return new ApolloClient({
    networkInterface: ssrNetworkInterface,
    ssrMode: true,
    dataIdFromObject: obj => obj.id
  })

}

let clientInstance = null

export function getClient() {

  if (clientInstance) {
    return clientInstance
  }

  if (browser) {
    clientInstance = createBrowserClient()
  } else {
    clientInstance = createServerSideClient()
  }

  return clientInstance
}

