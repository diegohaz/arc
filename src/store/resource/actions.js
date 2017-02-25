export const RESOURCE_CREATE = 'RESOURCE_CREATE'
export const RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST'
export const RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS'
export const RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE'

export const resourceCreateRequest = (data, resolve, reject) => ({
  type: RESOURCE_CREATE_REQUEST,
  data,
  resolve,
  reject,
})

export const resourceCreateSuccess = detail => ({
  type: RESOURCE_CREATE_SUCCESS,
  detail,
})

export const resourceCreateFailure = error => ({
  type: RESOURCE_CREATE_FAILURE,
  error,
})

export const RESOURCE_LIST_READ = 'RESOURCE_LIST_READ'
export const RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST'
export const RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS'
export const RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE'

export const resourceListReadRequest = (params, resolve, reject) => ({
  type: RESOURCE_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const resourceListReadSuccess = list => ({
  type: RESOURCE_LIST_READ_SUCCESS,
  list,
})

export const resourceListReadFailure = error => ({
  type: RESOURCE_LIST_READ_FAILURE,
  error,
})

export const RESOURCE_DETAIL_READ = 'RESOURCE_DETAIL_READ'
export const RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST'
export const RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS'
export const RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE'

export const resourceDetailReadRequest = (needle, resolve, reject) => ({
  type: RESOURCE_DETAIL_READ_REQUEST,
  needle,
  resolve,
  reject,
})

export const resourceDetailReadSuccess = (needle, detail) => ({
  type: RESOURCE_DETAIL_READ_SUCCESS,
  needle,
  detail,
})

export const resourceDetailReadFailure = (needle, error) => ({
  type: RESOURCE_DETAIL_READ_FAILURE,
  needle,
  error,
})

export const RESOURCE_UPDATE = 'RESOURCE_UPDATE'
export const RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST'
export const RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS'
export const RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE'

export const resourceUpdateRequest = (needle, data, resolve, reject) => ({
  type: RESOURCE_UPDATE_REQUEST,
  needle,
  data,
  resolve,
  reject,
})

export const resourceUpdateSuccess = (needle, detail) => ({
  type: RESOURCE_UPDATE_SUCCESS,
  needle,
  detail,
})

export const resourceUpdateFailure = (needle, error) => ({
  type: RESOURCE_UPDATE_FAILURE,
  needle,
  error,
})

export const RESOURCE_DELETE = 'RESOURCE_DELETE'
export const RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST'
export const RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS'
export const RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE'

export const resourceDeleteRequest = (needle, resolve, reject) => ({
  type: RESOURCE_DELETE_REQUEST,
  needle,
  resolve,
  reject,
})

export const resourceDeleteSuccess = needle => ({
  type: RESOURCE_DELETE_SUCCESS,
  needle,
})

export const resourceDeleteFailure = (needle, error) => ({
  type: RESOURCE_DELETE_FAILURE,
  needle,
  error,
})
