import { initialState } from './selectors'
import reducer from './reducer'

const altState = {
  ...initialState,
  foo: {
    id: 1,
    bars: [1, 2, 3],
  },
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles actions', () => {
  expect(reducer(initialState, { entities: { foo: altState.foo } })).toEqual(altState)
  expect(reducer(altState, { entities: { foo: { bars: [4] } } })).toEqual({
    ...altState,
    foo: {
      ...altState.foo,
      bars: [4],
    },
  })
})
