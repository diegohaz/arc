import * as selectors from './selectors'

const altState = {
  loading: {
    FETCH_USER: false,
    FETCH_USERS: true,
    CREATE_USER: false,
    UPDATE_USER: true
  },
  error: {
    FETCH_USER: false,
    FETCH_USERS: false,
    CREATE_USER: true,
    UPDATE_USER: true
  }
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    loading: {},
    error: {}
  })
})

test('getLoadingState', () => {
  expect(selectors.getLoadingState({})).toEqual({})
  expect(selectors.getLoadingState()).toEqual(selectors.initialState.loading)
  expect(selectors.getLoadingState(selectors.initialState)).toEqual(selectors.initialState.loading)
})

test('getErrorState', () => {
  expect(selectors.getErrorState({})).toEqual({})
  expect(selectors.getErrorState()).toEqual(selectors.initialState.error)
  expect(selectors.getErrorState(selectors.initialState)).toEqual(selectors.initialState.error)
})

describe('isLoading', () => {
  test('all', () => {
    expect(selectors.isLoading()).toBe(false)
    expect(selectors.isLoading(selectors.initialState)).toBe(false)
    expect(selectors.isLoading(altState)).toBe(true)
  })

  test('with prefix', () => {
    expect(selectors.isLoading(selectors.initialState, 'FETCH_USER')).toBe(false)
    expect(selectors.isLoading(altState, 'FETCH_USER')).toBe(false)
    expect(selectors.isLoading(altState, 'FETCH_USERS')).toBe(true)
  })

  test('with array prefix', () => {
    expect(selectors.isLoading(selectors.initialState, ['FETCH_USER'])).toBe(false)
    expect(selectors.isLoading(altState, ['FETCH_USER', 'CREATE_USER'])).toBe(false)
    expect(selectors.isLoading(altState, ['FETCH_USER', 'FETCH_USERS'])).toBe(true)
    expect(selectors.isLoading(altState, ['FETCH_USERS', 'FETCH_USER'])).toBe(true)
  })
})

describe('hasError', () => {
  test('all', () => {
    expect(selectors.hasError()).toBe(false)
    expect(selectors.hasError(selectors.initialState)).toBe(false)
    expect(selectors.hasError(altState)).toBe(true)
  })

  test('with prefix', () => {
    expect(selectors.hasError(selectors.initialState, 'FETCH_USERS')).toBe(false)
    expect(selectors.hasError(altState, 'FETCH_USERS')).toBe(false)
    expect(selectors.hasError(altState, 'CREATE_USER')).toBe(true)
  })

  test('with array prefix', () => {
    expect(selectors.hasError(selectors.initialState, ['FETCH_USER'])).toBe(false)
    expect(selectors.hasError(altState, ['FETCH_USER', 'FETCH_USERS'])).toBe(false)
    expect(selectors.hasError(altState, ['FETCH_USER', 'CREATE_USER'])).toBe(true)
    expect(selectors.hasError(altState, ['CREATE_USER', 'FETCH_USER'])).toBe(true)
  })
})
