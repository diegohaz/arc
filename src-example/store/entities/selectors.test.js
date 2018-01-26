// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import values from 'lodash/values'
import * as selectors from './selectors'

jest.mock('./schemas', () => {
  const { schema } = require('normalizr')
  return {
    entity: new schema.Entity('entity'),
  }
})

const altState = {
  entity: {
    1: {
      id: 1,
      title: 'test',
      description: 'test',
    },
    2: {
      id: 2,
      title: 'test 2',
      description: 'test 2',
    },
  },
}

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('getEntity', () => {
  expect(selectors.getEntity(undefined, 'test')).toEqual({})
  expect(selectors.getEntity({}, 'test')).toEqual({})
  expect(selectors.getEntity(altState, 'test')).toEqual({})
  expect(selectors.getEntity(altState, 'entity')).toEqual(altState.entity)
})

test('getDetail', () => {
  expect(selectors.getDetail(undefined, 'test')).toBeUndefined()
  expect(selectors.getDetail(undefined, 'test', 1)).toBeUndefined()
  expect(selectors.getDetail({}, 'test')).toBeUndefined()
  expect(selectors.getDetail({}, 'test', 1)).toBeUndefined()
  expect(selectors.getDetail(altState, 'entity')).toBeUndefined()
  expect(selectors.getDetail(altState, 'entity', 1)).toEqual(altState.entity[1])
})

test('getList', () => {
  expect(selectors.getList(undefined, 'test')).toEqual([])
  expect(selectors.getList(undefined, 'test', [1])).toEqual([undefined])
  expect(selectors.getList({}, 'test')).toEqual([])
  expect(selectors.getList({}, 'test', [1])).toEqual([undefined])
  expect(selectors.getList(altState, 'entity')).toEqual(values(altState.entity))
  expect(selectors.getList(altState, 'entity', [1])).toEqual([altState.entity[1]])
})

test('getDenormalizedDetail', () => {
  expect(selectors.getDenormalizedDetail(undefined, 'test')).toBeUndefined()
  expect(selectors.getDenormalizedDetail({}, 'test')).toBeUndefined()
  expect(selectors.getDenormalizedDetail(altState, 'entity')).toBeUndefined()
  expect(selectors.getDenormalizedDetail(altState, 'entity', 1)).toEqual(altState.entity[1])
})

test('getDenormalizedList', () => {
  expect(selectors.getDenormalizedList(undefined, 'test')).toEqual([])
  expect(selectors.getDenormalizedList({}, 'test')).toEqual([])
  expect(selectors.getDenormalizedList(altState, 'entity')).toEqual(values(altState.entity))
  expect(selectors.getDenormalizedList(altState, 'entity', [1])).toEqual([altState.entity[1]])
})
