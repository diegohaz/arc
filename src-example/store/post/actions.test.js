// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
import * as actions from './actions'

const done = () => {}

test('postCreateRequest', () => {
  expect(actions.postCreateRequest({ title: 'test' }, done)).toEqual({
    type: actions.POST_CREATE_REQUEST,
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

test('postCreateSuccess', () => {
  expect(actions.postCreateSuccess({ id: 1, title: 'test' }, 'foo')).toEqual({
    type: actions.POST_CREATE_SUCCESS,
    payload: { id: 1, title: 'test' },
    meta: {
      request: 'foo',
    },
  })
})

test('postCreateFailure', () => {
  expect(actions.postCreateFailure('error', 'foo')).toEqual({
    type: actions.POST_CREATE_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})

test('postListReadRequest', () => {
  expect(actions.postListReadRequest({ fields: 'test' }, done)).toEqual({
    type: actions.POST_LIST_READ_REQUEST,
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

test('postListReadSuccess', () => {
  expect(actions.postListReadSuccess([1, 2, 3], 'foo')).toEqual({
    type: actions.POST_LIST_READ_SUCCESS,
    payload: [1, 2, 3],
    meta: {
      request: 'foo',
    },
  })
})

test('postListReadFailure', () => {
  expect(actions.postListReadFailure('error', 'foo')).toEqual({
    type: actions.POST_LIST_READ_FAILURE,
    error: true,
    payload: 'error',
    meta: {
      request: 'foo',
    },
  })
})
