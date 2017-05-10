// https://github.com/diegohaz/arc/wiki/Example-redux-modules#async
const createAction = (action, key, done = action.meta.async.done) => ({
  ...action,
  meta: {
    ...action.meta,
    async: {
      ...action.meta.async,
      key,
      done,
    },
  },
})

const middleware = () => next => (action) => {
  if (action.meta && action.meta.async && !action.meta.async.key) {
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#solving-race-conflicts
    const key = Math.random().toFixed(16).substring(2)

    if (typeof action.meta.async.done !== 'function') {
      return new Promise((resolve, reject) => {
        // istanbul ignore next
        const done = (err, response) => err ? reject(err) : resolve(response)
        next(createAction(action, key, done))
      })
    }
    return next(createAction(action, key))
  }
  return next(action)
}

export default middleware
