import { initialState, getLoadingState, getErrorState } from './selectors'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

const expectStateToMatch = (suffix, loading, error) =>
  expect(reducer(initialState, { type: `SOMETHING_${suffix}` }))
    .toEqual({
      loading: { ...getLoadingState(), SOMETHING: loading },
      error: { ...getErrorState(), SOMETHING: error },
    })

it('handles SOMETHING_REQUEST', () => {
  expectStateToMatch('REQUEST', true, false)
})

it('handles SOMETHING_SUCCESS', () => {
  expectStateToMatch('SUCCESS', false, false)
})

it('handles SOMETHING_FAILURE', () => {
  expectStateToMatch('FAILURE', false, true)
})
