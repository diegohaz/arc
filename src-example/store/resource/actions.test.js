// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import * as actions from './actions'

test('resourceCreateRequest', () => {
  expect(actions.resourceCreateRequest({ title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_REQUEST,
      payload: {
        data: {
          title: 'test',
        },
      },
    }))
})

test('resourceCreateSuccess', () => {
  expect(actions.resourceCreateSuccess({ id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceCreateFailure', () => {
  expect(actions.resourceCreateFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceListReadRequest', () => {
  expect(actions.resourceListReadRequest({ fields: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_REQUEST,
      payload: {
        params: {
          fields: 'test',
        },
      },
    }))
})

test('resourceListReadSuccess', () => {
  expect(actions.resourceListReadSuccess([1, 2, 3], 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_SUCCESS,
      payload: [1, 2, 3],
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceListReadFailure', () => {
  expect(actions.resourceListReadFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceDetailReadRequest', () => {
  expect(actions.resourceDetailReadRequest(1))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_REQUEST,
      payload: {
        needle: 1,
      },
    }))
})

test('resourceDetailReadSuccess', () => {
  expect(actions.resourceDetailReadSuccess({ id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceDetailReadFailure', () => {
  expect(actions.resourceDetailReadFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceUpdateRequest', () => {
  expect(actions.resourceUpdateRequest(1, { title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_REQUEST,
      payload: {
        needle: 1,
        data: {
          title: 'test',
        },
      },
    }))
})

test('resourceUpdateSuccess', () => {
  expect(actions.resourceUpdateSuccess({ id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceUpdateFailure', () => {
  expect(actions.resourceUpdateFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceDeleteRequest', () => {
  expect(actions.resourceDeleteRequest(1))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_REQUEST,
      payload: {
        needle: 1,
      },
    }))
})

test('resourceDeleteSuccess', () => {
  expect(actions.resourceDeleteSuccess('request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_SUCCESS,
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('resourceDeleteFailure', () => {
  expect(actions.resourceDeleteFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})
