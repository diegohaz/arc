// https://github.com/diegohaz/arc/wiki/Actions
export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

export const postCreateRequest = (data, done) => ({
  type: POST_CREATE_REQUEST,
  payload: {
    data,
  },
  meta: {
    done,
  },
})

export const postCreateSuccess = (detail, request) => ({
  type: POST_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
  },
})

export const postCreateFailure = (error, request) => ({
  type: POST_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const POST_LIST_READ = 'POST_LIST_READ'
export const POST_LIST_READ_REQUEST = 'POST_LIST_READ_REQUEST'
export const POST_LIST_READ_SUCCESS = 'POST_LIST_READ_SUCCESS'
export const POST_LIST_READ_FAILURE = 'POST_LIST_READ_FAILURE'

export const postListReadRequest = (params, done) => ({
  type: POST_LIST_READ_REQUEST,
  payload: {
    params,
  },
  meta: {
    done,
  },
})

export const postListReadSuccess = (list, request) => ({
  type: POST_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
  },
})

export const postListReadFailure = (error, request) => ({
  type: POST_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})
