// https://github.com/diegohaz/arc/wiki/Actions
export const RESOURCE_CREATE = 'RESOURCE_CREATE'
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = (data, done) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: {
    data,
  },
  meta: {
    done,
  },
})

export const resourceCreateSuccess = (detail, request) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
  },
})

export const resourceCreateFailure = (error, request) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const RESOURCE_LIST_READ = 'RESOURCE_LIST_READ'
export const RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST'
export const RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS'
export const RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE'

export const resourceListReadRequest = (params, done) => ({
  type: RESOURCE_LIST_READ_REQUEST,
  payload: {
    params,
  },
  meta: {
    done,
  },
})

export const resourceListReadSuccess = (list, request) => ({
  type: RESOURCE_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
  },
})

export const resourceListReadFailure = (error, request) => ({
  type: RESOURCE_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const RESOURCE_DETAIL_READ = 'RESOURCE_DETAIL_READ'
export const RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST'
export const RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS'
export const RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE'

export const resourceDetailReadRequest = (needle, done) => ({
  type: RESOURCE_DETAIL_READ_REQUEST,
  payload: {
    needle,
  },
  meta: {
    done,
  },
})

export const resourceDetailReadSuccess = (detail, request) => ({
  type: RESOURCE_DETAIL_READ_SUCCESS,
  payload: detail,
  meta: {
    request,
  },
})

export const resourceDetailReadFailure = (error, request) => ({
  type: RESOURCE_DETAIL_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const RESOURCE_UPDATE = 'RESOURCE_UPDATE'
export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (needle, data, done) => ({
  type: RESOURCE_UPDATE_REQUEST,
  payload: {
    needle,
    data,
  },
  meta: {
    done,
  },
})

export const resourceUpdateSuccess = (detail, request) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
  },
})

export const resourceUpdateFailure = (error, request) => ({
  type: RESOURCE_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const RESOURCE_DELETE = 'RESOURCE_DELETE'
export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = (needle, done) => ({
  type: RESOURCE_DELETE_REQUEST,
  payload: {
    needle,
  },
  meta: {
    done,
  },
})

export const resourceDeleteSuccess = (request) => ({
  type: RESOURCE_DELETE_SUCCESS,
  meta: {
    request,
  },
})

export const resourceDeleteFailure = (error, request) => ({
  type: RESOURCE_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})
