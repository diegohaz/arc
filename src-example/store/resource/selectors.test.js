// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import * as selectors from './selectors'

const altState = {
  resources: {
    list: [1, 2, 3],
    detail: 1,
  },
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('initialResourceState', () => {
  expect(selectors.initialResourceState).toEqual({
    list: [],
    detail: null,
  })
})

test('getResourceState', () => {
  expect(selectors.getResourceState()).toBe(selectors.initialResourceState)
  expect(selectors.getResourceState(undefined, 'resources')).toBe(selectors.initialResourceState)
  expect(selectors.getResourceState(altState, 'resources')).toBe(altState.resources)
})

test('getList', () => {
  expect(selectors.getList()).toBe(selectors.initialResourceState.list)
  expect(selectors.getList({})).toBe(selectors.initialResourceState.list)
  expect(selectors.getList(undefined, 'resources')).toBe(selectors.initialResourceState.list)
  expect(selectors.getList(altState, 'resources')).toBe(altState.resources.list)
})

test('getDetail', () => {
  expect(selectors.getDetail()).toBe(selectors.initialResourceState.detail)
  expect(selectors.getDetail({})).toBe(selectors.initialResourceState.detail)
  expect(selectors.getDetail(undefined, 'resources')).toBe(selectors.initialResourceState.detail)
  expect(selectors.getDetail(altState, 'resources')).toBe(altState.resources.detail)
})
