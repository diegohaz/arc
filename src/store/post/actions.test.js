import * as actions from './actions'

test('postList', () => {
  expect(actions.postList.request(3)).toEqual({
    type: actions.POST_LIST_REQUEST,
    limit: 3
  })

  expect(actions.postList.success([1, 2, 3])).toEqual({
    type: actions.POST_LIST_SUCCESS,
    list: [1, 2, 3]
  })

  expect(actions.postList.failure('test')).toEqual({
    type: actions.POST_LIST_FAILURE,
    error: 'test'
  })
})

test('postCreate', () => {
  expect(actions.postCreate.request({ id: 1, title: 'test' })).toEqual({
    type: actions.POST_CREATE_REQUEST,
    data: {
      id: 1,
      title: 'test'
    }
  })

  expect(actions.postCreate.success({ id: 2, title: 'test 2' })).toEqual({
    type: actions.POST_CREATE_SUCCESS,
    data: {
      id: 2,
      title: 'test 2'
    }
  })

  expect(actions.postCreate.failure('test')).toEqual({
    type: actions.POST_CREATE_FAILURE,
    error: 'test'
  })
})
