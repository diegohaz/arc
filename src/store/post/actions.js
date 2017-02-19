export const POST_LIST = 'POST_LIST'
export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'
export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'
export const POST_READ = 'POST_READ'
export const POST_READ_REQUEST = 'POST_READ_REQUEST'
export const POST_READ_SUCCESS = 'POST_READ_SUCCESS'
export const POST_READ_FAILURE = 'POST_READ_FAILURE'
export const POST_UPDATE = 'POST_UPDATE'
export const POST_UPDATE_REQUEST = 'POST_UPDATE_REQUEST'
export const POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS'
export const POST_UPDATE_FAILURE = 'POST_UPDATE_FAILURE'
export const POST_DELETE = 'POST_DELETE'
export const POST_DELETE_REQUEST = 'POST_DELETE_REQUEST'
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS'
export const POST_DELETE_FAILURE = 'POST_DELETE_FAILURE'

export const postList = {
  request: (limit, resolve, reject) => ({ type: POST_LIST_REQUEST, limit, resolve, reject }),
  success: (list) => ({ type: POST_LIST_SUCCESS, list }),
  failure: (error) => ({ type: POST_LIST_FAILURE, error })
}

export const postCreate = {
  request: (data, resolve, reject) => ({ type: POST_CREATE_REQUEST, data, resolve, reject }),
  success: (data) => ({ type: POST_CREATE_SUCCESS, data }),
  failure: (error) => ({ type: POST_CREATE_FAILURE, error })
}

export const postRead = {
  request: (id, resolve, reject) => ({ type: POST_READ_REQUEST, id, resolve, reject }),
  success: (data) => ({ type: POST_READ_SUCCESS, data }),
  failure: (error) => ({ type: POST_READ_FAILURE, error })
}

export const postUpdate = {
  request: (data, newData, resolve, reject) => ({ type: POST_UPDATE_REQUEST, data, newData, resolve, reject }),
  success: (data, newData) => ({ type: POST_UPDATE_SUCCESS, data, newData }),
  failure: (error) => ({ type: POST_UPDATE_FAILURE, error })
}

export const postDelete = {
  request: (id, resolve, reject) => ({ type: POST_DELETE_REQUEST, id, resolve, reject }),
  success: (data) => ({ type: POST_DELETE_SUCCESS, data }),
  failure: (error) => ({ type: POST_DELETE_FAILURE, error })
}
