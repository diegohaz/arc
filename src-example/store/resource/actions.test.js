// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
import * as actions from './actions'

const done = () => {}

test('resourceCreateRequest', () => {
  expect(actions.resourceCreateRequest({ title: 'test' }, done)).toEqual({
    type: actions.RESOURCE_CREATE_REQUEST,
    payload: {
      data: {
        title: 'test',
      },
    },
    meta: {
      done,
    },
  })
})

test('resourceCreateSuccess', () => {
  expect(actions.resourceCreateSuccess({ id: 1, title: 'test' }, 'foo')).toEqual({
    type: actions.RESOURCE_CREATE_SUCCESS,
    payload: { id: 1, title: 'test' },
    meta: {
      request: 'foo',
    },
  })
})

test('resourceCreateFailure', () => {
  expect(actions.resourceCreateFailure('error', 'foo')).toEqual({
    type: actions.RESOURCE_CREATE_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})

test('resourceListReadRequest', () => {
  expect(actions.resourceListReadRequest({ fields: 'test' }, done)).toEqual({
    type: actions.RESOURCE_LIST_READ_REQUEST,
    payload: {
      params: {
        fields: 'test',
      },
    },
    meta: {
      done,
    },
  })
})

test('resourceListReadSuccess', () => {
  expect(actions.resourceListReadSuccess([1, 2, 3], 'foo')).toEqual({
    type: actions.RESOURCE_LIST_READ_SUCCESS,
    payload: [1, 2, 3],
    meta: {
      request: 'foo',
    },
  })
})

test('resourceListReadFailure', () => {
  expect(actions.resourceListReadFailure('error', 'foo')).toEqual({
    type: actions.RESOURCE_LIST_READ_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})

test('resourceDetailReadRequest', () => {
  expect(actions.resourceDetailReadRequest(1, done)).toEqual({
    type: actions.RESOURCE_DETAIL_READ_REQUEST,
    payload: {
      needle: 1,
    },
    meta: {
      done,
    },
  })
})

test('resourceDetailReadSuccess', () => {
  expect(actions.resourceDetailReadSuccess({ id: 1, title: 'test' }, 'foo')).toEqual({
    type: actions.RESOURCE_DETAIL_READ_SUCCESS,
    payload: { id: 1, title: 'test' },
    meta: {
      request: 'foo',
    },
  })
})

test('resourceDetailReadFailure', () => {
  expect(actions.resourceDetailReadFailure('error', 'foo')).toEqual({
    type: actions.RESOURCE_DETAIL_READ_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})

test('resourceUpdateRequest', () => {
  expect(actions.resourceUpdateRequest(1, { title: 'test' }, done)).toEqual({
    type: actions.RESOURCE_UPDATE_REQUEST,
    payload: {
      needle: 1,
      data: {
        title: 'test',
      },
    },
    meta: {
      done,
    },
  })
})

test('resourceUpdateSuccess', () => {
  expect(actions.resourceUpdateSuccess({ id: 1, title: 'test' }, 'foo')).toEqual({
    type: actions.RESOURCE_UPDATE_SUCCESS,
    payload: { id: 1, title: 'test' },
    meta: {
      request: 'foo',
    },
  })
})

test('resourceUpdateFailure', () => {
  expect(actions.resourceUpdateFailure('error', 'foo')).toEqual({
    type: actions.RESOURCE_UPDATE_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})

test('resourceDeleteRequest', () => {
  expect(actions.resourceDeleteRequest(1, done)).toEqual({
    type: actions.RESOURCE_DELETE_REQUEST,
    payload: {
      needle: 1,
    },
    meta: {
      done,
    },
  })
})

test('resourceDeleteSuccess', () => {
  expect(actions.resourceDeleteSuccess('foo')).toEqual({
    type: actions.RESOURCE_DELETE_SUCCESS,
    meta: {
      request: 'foo',
    },
  })
})

test('resourceDeleteFailure', () => {
  expect(actions.resourceDeleteFailure('error', 'foo')).toEqual({
    type: actions.RESOURCE_DELETE_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})
