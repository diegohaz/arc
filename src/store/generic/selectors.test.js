import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    list: []
  })
})

test('getList', () => {
  expect(selectors.getList({})).toEqual([])
  expect(selectors.getList()).toEqual(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toEqual(selectors.initialState.list)
})
