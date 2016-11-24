import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles GENERIC_CREATE', () => {
  expect(reducer(initialState, {
    type: actions.GENERIC_CREATE,
    data: 3
  })).toEqual({
    ...initialState,
    list: [3]
  })

  expect(reducer({
    ...initialState, list: [1, 2]
  }, {
    type: actions.GENERIC_CREATE,
    data: 3
  })).toEqual({
    ...initialState,
    list: [3, 1, 2]
  })
})

it('handles GENERIC_UPDATE', () => {
  expect(reducer({
    ...initialState, list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }]
  }, {
    type: actions.GENERIC_UPDATE,
    data: { id: 3 },
    newData: { title: 'test3' }
  })).toEqual({
    ...initialState,
    list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }]
  })

  expect(reducer({
    ...initialState, list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }]
  }, {
    type: actions.GENERIC_UPDATE,
    data: { id: 2 },
    newData: { title: 'test3' }
  })).toEqual({
    ...initialState,
    list: [{ id: 1, title: 'test' }, { id: 2, title: 'test3' }]
  })
})

it('handles GENERIC_DELETE', () => {
  expect(reducer({
    ...initialState, list: [{ id: 1, title: 'test' }, { id: 2, title: 'test' }]
  }, {
    type: actions.GENERIC_DELETE,
    data: { id: 3 }
  })).toEqual({
    ...initialState,
    list: [{ id: 1, title: 'test' }, { id: 2, title: 'test' }]
  })

  expect(reducer({
    ...initialState, list: [{ id: 1, title: 'test' }, { id: 2, title: 'test' }]
  }, {
    type: actions.GENERIC_DELETE,
    data: { id: 1 }
  })).toEqual({
    ...initialState,
    list: [{ id: 2, title: 'test' }]
  })
})
