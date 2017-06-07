// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = (resource, data) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    resource,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    thunk: `${resource}Create`,
  },
})

export const resourceCreateSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource,
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: resource,
  },
})

export const resourceCreateFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    resource,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    thunk,
  },
})

export const RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST'
export const RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS'
export const RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE'

export const resourceListReadRequest = (resource, params) => ({
  type: RESOURCE_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    resource,
    thunk: `${resource}ListRead`,
  },
})

export const resourceListReadSuccess = (resource, list, request, thunk) => ({
  type: RESOURCE_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    thunk,
    resource,
    entities: resource,
  },
})

export const resourceListReadFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    resource,
  },
})

export const RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST'
export const RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS'
export const RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE'

export const resourceDetailReadRequest = (resource, needle) => ({
  type: RESOURCE_DETAIL_READ_REQUEST,
  payload: { needle },
  meta: {
    resource,
    thunk: `${resource}DetailRead`,
  },
})

export const resourceDetailReadSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_DETAIL_READ_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource,
    entities: resource,
  },
})

export const resourceDetailReadFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_DETAIL_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    resource,
  },
})

export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (resource, needle, data) => ({
  type: RESOURCE_UPDATE_REQUEST,
  payload: { needle, data },
  meta: {
    resource,
    thunk: `${resource}Update`,
  },
})

export const resourceUpdateSuccess = (resource, detail, request, thunk) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    thunk,
    resource,
    entities: resource,
  },
})

export const resourceUpdateFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    resource,
  },
})

export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = (resource, needle) => ({
  type: RESOURCE_DELETE_REQUEST,
  payload: { needle },
  meta: {
    resource,
    thunk: `${resource}Delete`,
  },
})

export const resourceDeleteSuccess = (resource, request, thunk) => ({
  type: RESOURCE_DELETE_SUCCESS,
  meta: {
    request,
    thunk,
    resource,
  },
})

export const resourceDeleteFailure = (resource, error, request, thunk) => ({
  type: RESOURCE_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    thunk,
    resource,
  },
})
