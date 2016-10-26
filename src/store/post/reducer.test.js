import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles POST_LIST_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.POST_LIST_SUCCESS,
    list: [1, 2, 3]
  })).toEqual({
    ...initialState,
    list: [1, 2, 3]
  })
})

it('handles POST_CREATE_SUCCESS', () => {
  expect(reducer(initialState, {
    type: actions.POST_CREATE_SUCCESS,
    data: 3
  })).toEqual({
    ...initialState,
    list: [3]
  })

  expect(reducer({
    ...initialState, list: [1, 2]
  }, {
    type: actions.POST_CREATE_SUCCESS,
    data: 3
  })).toEqual({
    ...initialState,
    list: [3, 1, 2]
  })
})
