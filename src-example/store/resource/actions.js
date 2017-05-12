// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
export const RESOURCE_CREATE = 'RESOURCE_CREATE'
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = (data, done) => ({
  type: RESOURCE_CREATE_REQUEST,
  payload: { data },
  meta: {
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    async: { name: RESOURCE_CREATE, done },
  },
})

export const resourceCreateSuccess = (detail, request, key) => ({
  type: RESOURCE_CREATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    async: { name: RESOURCE_CREATE, key },
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
    entities: 'resource',
  },
})

export const resourceCreateFailure = (error, request, key) => ({
  type: RESOURCE_CREATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    async: { name: RESOURCE_CREATE, key },
  },
})

export const RESOURCE_LIST_READ = 'RESOURCE_LIST_READ'
export const RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST'
export const RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS'
export const RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE'

export const resourceListReadRequest = (params, done) => ({
  type: RESOURCE_LIST_READ_REQUEST,
  payload: { params },
  meta: {
    async: { name: RESOURCE_LIST_READ, done },
  },
})

export const resourceListReadSuccess = (list, request, key) => ({
  type: RESOURCE_LIST_READ_SUCCESS,
  payload: list,
  meta: {
    request,
    async: { name: RESOURCE_LIST_READ, key },
    entities: 'resource',
  },
})

export const resourceListReadFailure = (error, request, key) => ({
  type: RESOURCE_LIST_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async: { name: RESOURCE_LIST_READ, key },
  },
})

export const RESOURCE_DETAIL_READ = 'RESOURCE_DETAIL_READ'
export const RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST'
export const RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS'
export const RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE'

export const resourceDetailReadRequest = (needle, done) => ({
  type: RESOURCE_DETAIL_READ_REQUEST,
  payload: { needle },
  meta: {
    async: { name: RESOURCE_DETAIL_READ, done },
  },
})

export const resourceDetailReadSuccess = (detail, request, key) => ({
  type: RESOURCE_DETAIL_READ_SUCCESS,
  payload: detail,
  meta: {
    request,
    async: { name: RESOURCE_DETAIL_READ, key },
    entities: 'resource',
  },
})

export const resourceDetailReadFailure = (error, request, key) => ({
  type: RESOURCE_DETAIL_READ_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async: { name: RESOURCE_DETAIL_READ, key },
  },
})

export const RESOURCE_UPDATE = 'RESOURCE_UPDATE'
export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (needle, data, done) => ({
  type: RESOURCE_UPDATE_REQUEST,
  payload: { needle, data },
  meta: {
    async: { name: RESOURCE_UPDATE, done },
  },
})

export const resourceUpdateSuccess = (detail, request, key) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  payload: detail,
  meta: {
    request,
    async: { name: RESOURCE_UPDATE, key },
    entities: 'resource',
  },
})

export const resourceUpdateFailure = (error, request, key) => ({
  type: RESOURCE_UPDATE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async: { name: RESOURCE_UPDATE, key },
  },
})

export const RESOURCE_DELETE = 'RESOURCE_DELETE'
export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = (needle, done) => ({
  type: RESOURCE_DELETE_REQUEST,
  payload: { needle },
  meta: {
    async: { name: RESOURCE_DELETE, done },
  },
})

export const resourceDeleteSuccess = (request, key) => ({
  type: RESOURCE_DELETE_SUCCESS,
  meta: {
    request,
    async: { name: RESOURCE_DELETE, key },
  },
})

export const resourceDeleteFailure = (error, request, key) => ({
  type: RESOURCE_DELETE_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
    async: { name: RESOURCE_DELETE, key },
  },
})
