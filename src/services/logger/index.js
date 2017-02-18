import minilog from 'minilog'

let logInstance = null

// Create a logger
minilog.enable()
logInstance = minilog('client')

// Track error, usually to Sentry.io
function trackError(/* error */) {
  // TODO: Add error tracking here
  // window.Rollbar.error(error);
}

// Monkey patch the existing error function, adding error tracking
const existingErrorFunc = logInstance.error
function newErrorFunc(error) {
  trackError(error)
  existingErrorFunc(error)
}
newErrorFunc.bind(logInstance)
logInstance.error = newErrorFunc

const logger = logInstance
export default logger

export function handleError(error) {
  // No error object?
  if (!error) {
    logger.error('Uncaught exception with null error object')
    return
  }

  // Log it
  logger.error(error)
}

