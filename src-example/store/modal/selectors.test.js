// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('isOpen', () => {
  expect(selectors.isOpen(undefined, 'test')).toBe(false)
  expect(selectors.isOpen({}, 'test')).toBe(false)
  expect(selectors.isOpen(selectors.initialState, 'test')).toBe(false)
  expect(selectors.isOpen({ test: false }, 'test')).toBe(false)
  expect(selectors.isOpen({ test: true }, 'test')).toBe(true)
})
