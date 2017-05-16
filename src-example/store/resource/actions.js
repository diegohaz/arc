// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = data => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    async: true,
  },
})

export const resourceCreateSuccess = (detail, request, async) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    async,
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: 'resource',
  },
})

export const resourceCreateFailure = (error, request, async) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    async,
  },
})

export const RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST'
export const RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS'
export const RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE'

export const resourceListReadRequest = params => ({
  type: RESOURCE_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    async: true,
  },
})

export const resourceListReadSuccess = (list, request, async) => ({
  type: RESOURCE_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    async,
    entities: 'resource',
  },
})

export const resourceListReadFailure = (error, request, async) => ({
  type: RESOURCE_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async,
  },
})

export const RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST'
export const RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS'
export const RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE'

export const resourceDetailReadRequest = needle => ({
  type: RESOURCE_DETAIL_READ_REQUEST,
  payload: { needle },
  meta: {
    async: true,
  },
})

export const resourceDetailReadSuccess = (detail, request, async) => ({
  type: RESOURCE_DETAIL_READ_SUCCESS,
  payload: detail,
  meta: {
    request,
    async,
    entities: 'resource',
  },
})

export const resourceDetailReadFailure = (error, request, async) => ({
  type: RESOURCE_DETAIL_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async,
  },
})

export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (needle, data) => ({
  type: RESOURCE_UPDATE_REQUEST,
  payload: { needle, data },
  meta: {
    async: true,
  },
})

export const resourceUpdateSuccess = (detail, request, async) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    async,
    entities: 'resource',
  },
})

export const resourceUpdateFailure = (error, request, async) => ({
  type: RESOURCE_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async,
  },
})

export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = needle => ({
  type: RESOURCE_DELETE_REQUEST,
  payload: { needle },
  meta: {
    async: true,
  },
})

export const resourceDeleteSuccess = (request, async) => ({
  type: RESOURCE_DELETE_SUCCESS,
  meta: {
    request,
    async,
  },
})

export const resourceDeleteFailure = (error, request, async) => ({
  type: RESOURCE_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async,
  },
})
