// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import * as actions from './actions'

test('resourceCreateRequest', () => {
  expect(actions.resourceCreateRequest('resources', { title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_REQUEST,
      payload: {
        data: {
          title: 'test',
        },
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('resourceCreateSuccess', () => {
  expect(actions.resourceCreateSuccess('resources', { id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceCreateFailure', () => {
  expect(actions.resourceCreateFailure('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_CREATE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceListReadRequest', () => {
  expect(actions.resourceListReadRequest('resources', { fields: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_REQUEST,
      payload: {
        params: {
          fields: 'test',
        },
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('resourceListReadSuccess', () => {
  expect(actions.resourceListReadSuccess('resources', [1, 2, 3], 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_SUCCESS,
      payload: [1, 2, 3],
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceListReadFailure', () => {
  expect(actions.resourceListReadFailure('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_LIST_READ_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceDetailReadRequest', () => {
  expect(actions.resourceDetailReadRequest('resources', 1))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_REQUEST,
      payload: {
        needle: 1,
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('resourceDetailReadSuccess', () => {
  expect(actions.resourceDetailReadSuccess('resources', { id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceDetailReadFailure', () => {
  expect(actions.resourceDetailReadFailure('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DETAIL_READ_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceUpdateRequest', () => {
  expect(actions.resourceUpdateRequest('resources', 1, { title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_REQUEST,
      payload: {
        needle: 1,
        data: {
          title: 'test',
        },
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('resourceUpdateSuccess', () => {
  expect(actions.resourceUpdateSuccess('resources', { id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceUpdateFailure', () => {
  expect(actions.resourceUpdateFailure('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_UPDATE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceDeleteRequest', () => {
  expect(actions.resourceDeleteRequest('resources', 1))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_REQUEST,
      payload: {
        needle: 1,
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('resourceDeleteSuccess', () => {
  expect(actions.resourceDeleteSuccess('resources', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_SUCCESS,
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('resourceDeleteFailure', () => {
  expect(actions.resourceDeleteFailure('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.RESOURCE_DELETE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})
