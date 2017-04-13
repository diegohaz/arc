import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    user: null,
  })
})

test('getUser', () => {
  expect(selectors.getUser()).toEqual(selectors.initialState.user)
  expect(selectors.getUser(selectors.initialState)).toEqual(selectors.initialState.user)
})
