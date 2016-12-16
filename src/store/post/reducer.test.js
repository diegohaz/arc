import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  list: [6, 7, 8]
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles POST_LIST_SUCCESS', () => {
  const action = { type: actions.POST_LIST_SUCCESS, list: [1, 2, 3] }
  expect(reducer(initialState, action)).toEqual({ ...initialState, list: [1, 2, 3] })
  expect(reducer(altState, action)).toEqual({ ...altState, list: [1, 2, 3] })
})

it('handles POST_CREATE_SUCCESS', () => {
  const action = { type: actions.POST_CREATE_SUCCESS, data: 3 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, list: [3] })
  expect(reducer(altState, action)).toEqual({ ...initialState, list: [3, 6, 7, 8] })
})
