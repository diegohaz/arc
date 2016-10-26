export const POST_LIST = 'POST_LIST'
export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'
export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

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
