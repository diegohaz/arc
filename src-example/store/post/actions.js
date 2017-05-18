// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

export const postCreateRequest = data => ({
  type: POST_CREATE_REQUEST,
  payload: { data },
  meta: {
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    thunk: true,
  },
})

export const postCreateSuccess = (detail, request, thunk) => ({
  type: POST_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: 'post',
  },
})

export const postCreateFailure = (error, request, thunk) => ({
  type: POST_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
  },
})

export const POST_LIST_READ_REQUEST = 'POST_LIST_READ_REQUEST'
export const POST_LIST_READ_SUCCESS = 'POST_LIST_READ_SUCCESS'
export const POST_LIST_READ_FAILURE = 'POST_LIST_READ_FAILURE'

export const postListReadRequest = params => ({
  type: POST_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    thunk: true,
  },
})

export const postListReadSuccess = (list, request, thunk) => ({
  type: POST_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    thunk,
    entities: 'post',
  },
})

export const postListReadFailure = (error, request, thunk) => ({
  type: POST_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
  },
})
