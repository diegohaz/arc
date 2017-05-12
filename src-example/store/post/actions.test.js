// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
import * as actions from './actions'

test('postCreateRequest', () => {
  expect(actions.postCreateRequest({ title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.POST_CREATE_REQUEST,
      payload: {
        data: {
          title: 'test',
        },
      },
    }))
})

test('postCreateSuccess', () => {
  expect(actions.postCreateSuccess({ id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.POST_CREATE_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('postCreateFailure', () => {
  expect(actions.postCreateFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.POST_CREATE_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('postListReadRequest', () => {
  expect(actions.postListReadRequest({ fields: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.POST_LIST_READ_REQUEST,
      payload: {
        params: {
          fields: 'test',
        },
      },
    }))
})

test('postListReadSuccess', () => {
  expect(actions.postListReadSuccess([1, 2, 3], 'request'))
    .toEqual(expect.objectContaining({
      type: actions.POST_LIST_READ_SUCCESS,
      payload: [1, 2, 3],
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})

test('postListReadFailure', () => {
  expect(actions.postListReadFailure('error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.POST_LIST_READ_FAILURE,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
      }),
    }))
})
