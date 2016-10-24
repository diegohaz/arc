import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles FORM_SET_CSRF_TOKEN', () => {
  expect(reducer(initialState, {
    type: actions.FORM_SET_CSRF_TOKEN,
    token: 'test'
  })).toEqual({
    ...initialState,
    csrfToken: 'test'
  })
})
