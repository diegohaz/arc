import configureStore from 'redux-mock-store'
import entitiesMiddleware from './middleware'

jest.mock('./schemas', () => {
  const { schema } = require('normalizr')
  const entity = new schema.Entity('entity')
  return {
    entity,
    actions: {
      ENTITY_LIST_SUCCESS: [entity],
      ENTITY_DETAIL_SUCCESS: entity,
    },
  }
})

const mockStore = configureStore([entitiesMiddleware])

it('dispatches the exactly same action', () => {
  const store = mockStore({})
  const action = { type: 'FOO', payload: 1 }
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches entities action along with the normalized action', () => {
  const store = mockStore({})
  const action = { type: 'ENTITY_DETAIL_SUCCESS', payload: { id: 2, foo: 'bar' } }
  expect(store.dispatch(action)).toEqual({ ...action, payload: 2 })
  expect(store.getActions()).toEqual([
    { type: 'ENTITIES_RECEIVE', entities: { entity: { 2: { id: 2, foo: 'bar' } } } },
    { ...action, payload: 2 },
  ])
})
