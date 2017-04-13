import * as actions from './actions'

test('resourceCreateRequest', () => {
  expect(actions.resourceCreateRequest({ title: 'test' })).toEqual({
    type: actions.RESOURCE_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('resourceCreateSuccess', () => {
  expect(actions.resourceCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.RESOURCE_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('resourceCreateFailure', () => {
  expect(actions.resourceCreateFailure('error')).toEqual({
    type: actions.RESOURCE_CREATE_FAILURE,
    error: 'error',
  })
})

test('resourceListReadRequest', () => {
  expect(actions.resourceListReadRequest({ fields: 'test' })).toEqual({
    type: actions.RESOURCE_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('resourceListReadSuccess', () => {
  expect(actions.resourceListReadSuccess([1, 2, 3])).toEqual({
    type: actions.RESOURCE_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('resourceListReadFailure', () => {
  expect(actions.resourceListReadFailure('error')).toEqual({
    type: actions.RESOURCE_LIST_READ_FAILURE,
    error: 'error',
  })
})

test('resourceDetailReadRequest', () => {
  expect(actions.resourceDetailReadRequest(1)).toEqual({
    type: actions.RESOURCE_DETAIL_READ_REQUEST,
    needle: 1,
  })
})

test('resourceDetailReadSuccess', () => {
  expect(actions.resourceDetailReadSuccess(1, { id: 1, title: 'test' })).toEqual({
    type: actions.RESOURCE_DETAIL_READ_SUCCESS,
    needle: 1,
    detail: { id: 1, title: 'test' },
  })
})

test('resourceDetailReadFailure', () => {
  expect(actions.resourceDetailReadFailure(1, 'error')).toEqual({
    type: actions.RESOURCE_DETAIL_READ_FAILURE,
    needle: 1,
    error: 'error',
  })
})

test('resourceUpdateRequest', () => {
  expect(actions.resourceUpdateRequest(1, { title: 'test' })).toEqual({
    type: actions.RESOURCE_UPDATE_REQUEST,
    needle: 1,
    data: { title: 'test' },
  })
})

test('resourceUpdateSuccess', () => {
  expect(actions.resourceUpdateSuccess(1, { id: 1, title: 'test' })).toEqual({
    type: actions.RESOURCE_UPDATE_SUCCESS,
    needle: 1,
    detail: { id: 1, title: 'test' },
  })
})

test('resourceUpdateFailure', () => {
  expect(actions.resourceUpdateFailure(1, 'error')).toEqual({
    type: actions.RESOURCE_UPDATE_FAILURE,
    needle: 1,
    error: 'error',
  })
})

test('resourceDeleteRequest', () => {
  expect(actions.resourceDeleteRequest(1)).toEqual({
    type: actions.RESOURCE_DELETE_REQUEST,
    needle: 1,
  })
})

test('resourceDeleteSuccess', () => {
  expect(actions.resourceDeleteSuccess(1)).toEqual({
    type: actions.RESOURCE_DELETE_SUCCESS,
    needle: 1,
  })
})

test('resourceDeleteFailure', () => {
  expect(actions.resourceDeleteFailure(1, 'error')).toEqual({
    type: actions.RESOURCE_DELETE_FAILURE,
    needle: 1,
    error: 'error',
  })
})
