export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

export const postCreateRequest = (data, resolve, reject) => ({
  type: POST_CREATE_REQUEST,
  data,
  resolve,
  reject,
})

export const postCreateSuccess = detail => ({
  type: POST_CREATE_SUCCESS,
  detail,
})

export const postCreateFailure = error => ({
  type: POST_CREATE_FAILURE,
  error,
})

export const POST_LIST_READ = 'POST_LIST_READ'
export const POST_LIST_READ_REQUEST = 'POST_LIST_READ_REQUEST'
export const POST_LIST_READ_SUCCESS = 'POST_LIST_READ_SUCCESS'
export const POST_LIST_READ_FAILURE = 'POST_LIST_READ_FAILURE'

export const postListReadRequest = (params, resolve, reject) => ({
  type: POST_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const postListReadSuccess = list => ({
  type: POST_LIST_READ_SUCCESS,
  list,
})

export const postListReadFailure = error => ({
  type: POST_LIST_READ_FAILURE,
  error,
})
