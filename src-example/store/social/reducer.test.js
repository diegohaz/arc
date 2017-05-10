// https://github.com/diegohaz/arc/wiki/Reducers#unit-testing-reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  user: 5,
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles SOCIAL_LOGIN_SUCCESS', () => {
  const action = { type: actions.SOCIAL_LOGIN_SUCCESS, payload: 1 }
  expect(reducer(initialState, action)).toEqual({ ...initialState, user: 1 })
  expect(reducer(altState, action)).toEqual({ ...altState, user: 1 })
})

it('handles SOCIAL_LOGOUT', () => {
  const action = { type: actions.SOCIAL_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, user: initialState.user })
})
