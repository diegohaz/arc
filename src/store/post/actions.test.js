import * as actions from './actions'

test('postCreateRequest', () => {
  expect(actions.postCreateRequest({ title: 'test' })).toEqual({
    type: actions.POST_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('postCreateSuccess', () => {
  expect(actions.postCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.POST_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('postCreateFailure', () => {
  expect(actions.postCreateFailure('error')).toEqual({
    type: actions.POST_CREATE_FAILURE,
    error: 'error',
  })
})

test('postListReadRequest', () => {
  expect(actions.postListReadRequest({ fields: 'test' })).toEqual({
    type: actions.POST_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('postListReadSuccess', () => {
  expect(actions.postListReadSuccess([1, 2, 3])).toEqual({
    type: actions.POST_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('postListReadFailure', () => {
  expect(actions.postListReadFailure('error')).toEqual({
    type: actions.POST_LIST_READ_FAILURE,
    error: 'error',
  })
})
