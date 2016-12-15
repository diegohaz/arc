import { fork, take } from 'redux-saga/effects'

export function* watchResolveReject () {
  const resolvers = {}
  const rejecters = {}
  while (true) {
    const { type, resolve, reject, ...rest } = yield take('*')
    let [ suffix, ...prefix ] = type.split('_').reverse()
    prefix = prefix.reverse().join('_')
    yield { prefix, suffix }

    switch (suffix) {
    case 'REQUEST':
      resolvers[prefix] = resolve
      rejecters[prefix] = reject
      break
    case 'SUCCESS':
      if (resolvers[prefix]) {
        resolvers[prefix](rest)
        delete resolvers[prefix]
      }
      break
    case 'FAILURE':
      if (rejecters[prefix]) {
        rejecters[prefix](rest)
        delete rejecters[prefix]
      }
    }

    yield { resolvers, rejecters }
  }
}

export default function* () {
  yield fork(watchResolveReject)
}
