import * as actions from './actions'

test('genericCreate', () => {
  expect(actions.genericCreate({ id: 1, title: 'test' })).toEqual({
    type: actions.GENERIC_CREATE,
    data: {
      id: 1,
      title: 'test'
    }
  })
})

test('genericUpdate', () => {
  expect(actions.genericUpdate({ id: 1 }, { title: 'test2' })).toEqual({
    type: actions.GENERIC_UPDATE,
    data: {
      id: 1
    },
    newData: {
      title: 'test2'
    }
  })
})

test('genericDelete', () => {
  expect(actions.genericDelete({ id: 1 })).toEqual({
    type: actions.GENERIC_DELETE,
    data: {
      id: 1
    }
  })
})
