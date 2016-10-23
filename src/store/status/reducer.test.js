import { initialState, getLoadingState, getErrorState } from './selectors'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('handles SOMETHING_REQUEST', () => {
  expect(reducer(initialState, {
    type: 'SOMETHING_REQUEST'
  })).toEqual({
    loading: {
      ...getLoadingState(),
      SOMETHING: true
    },
    error: {
      ...getErrorState(),
      SOMETHING: false
    }
  })
})

it('handles SOMETHING_SUCCESS', () => {
  expect(reducer(initialState, {
    type: 'SOMETHING_SUCCESS'
  })).toEqual({
    loading: {
      ...getLoadingState(),
      SOMETHING: false
    },
    error: {
      ...getErrorState(),
      SOMETHING: false
    }
  })
})

it('handles SOMETHING_FAILURE', () => {
  expect(reducer(initialState, {
    type: 'SOMETHING_FAILURE'
  })).toEqual({
    loading: {
      ...getLoadingState(),
      SOMETHING: false
    },
    error: {
      ...getErrorState(),
      SOMETHING: true
    }
  })
})
