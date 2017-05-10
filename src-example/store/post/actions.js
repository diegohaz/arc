// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

export const postCreateRequest = (data, done) => ({
  type: POST_CREATE_REQUEST,
  payload: { data },
  meta: {
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#async
    async: { done },
  },
})

export const postCreateSuccess = (detail, request, key) => ({
  type: POST_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    async: { key },
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: 'post',
  },
})

export const postCreateFailure = (error, request, key) => ({
  type: POST_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#solving-race-conflicts
    async: { key },
  },
})

export const POST_LIST_READ = 'POST_LIST_READ'
export const POST_LIST_READ_REQUEST = 'POST_LIST_READ_REQUEST'
export const POST_LIST_READ_SUCCESS = 'POST_LIST_READ_SUCCESS'
export const POST_LIST_READ_FAILURE = 'POST_LIST_READ_FAILURE'

export const postListReadRequest = (params, done) => ({
  type: POST_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    async: { done },
  },
})

export const postListReadSuccess = (list, request, key) => ({
  type: POST_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    async: { key },
    entities: 'post',
  },
})

export const postListReadFailure = (error, request, key) => ({
  type: POST_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async: { key },
  },
})
