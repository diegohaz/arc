const hasDone = meta => Object.prototype.hasOwnProperty.call(meta, 'done')

const isUndefined = input => typeof input === 'undefined'

const middleware = () => next => (action) => {
  if (action.meta && hasDone(action.meta) && isUndefined(action.meta.done)) {
    return new Promise((resolve, reject) => {
      // istanbul ignore next
      const done = (err, response) => err ? reject(err) : resolve(response)
      next({ ...action, meta: { ...action.meta, done } })
    })
  }
  return next(action)
}

export default middleware
