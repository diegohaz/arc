// https://github.com/diegohaz/arc/wiki/Reducers#unit-testing-reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { initialState, getResourceState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const action = (type, payload, meta) => ({
  type,
  payload,
  meta: {
    resource: 'resources',
    ...meta,
  },
})

const state = resourceState => ({
  ...initialState,
  resources: {
    ...getResourceState(initialState, 'resources'),
    ...resourceState,
  },
})

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('RESOURCE_CREATE_SUCCESS', () => {
  it('adds the new data to the initial state', () => {
    expect(reducer(
      initialState,
      action(actions.RESOURCE_CREATE_SUCCESS, 1)
    )).toEqual(state({ list: [1] }))
  })

  it('prepends the new data to an existing state', () => {
    expect(reducer(
      state({ list: [1, 2] }),
      action(actions.RESOURCE_CREATE_SUCCESS, 3)
    )).toEqual(state({ list: [3, 1, 2] }))
  })
})

describe('RESOURCE_LIST_READ_REQUEST', () => {
  it('keeps the list initial state', () => {
    expect(reducer(
      initialState,
      action(actions.RESOURCE_LIST_READ_REQUEST)
    )).toEqual(state())
  })

  it('resets the list to initial state in an existing state', () => {
    expect(reducer(
      state({ list: [1, 2, 3] }),
      action(actions.RESOURCE_LIST_READ_REQUEST)
    )).toEqual(state())
  })
})

describe('RESOURCE_LIST_READ_SUCCESS', () => {
  it('sets list in the initial state', () => {
    expect(reducer(
      initialState,
      action(actions.RESOURCE_LIST_READ_SUCCESS, [1, 2, 3])
    )).toEqual(state({ list: [1, 2, 3] }))
  })

  it('overrides list in an existing state', () => {
    expect(reducer(
      state({ list: [1, 2, 3] }),
      action(actions.RESOURCE_LIST_READ_SUCCESS, [3, 2, 1])
    )).toEqual(state({ list: [3, 2, 1] }))
  })
})

describe('RESOURCE_DETAIL_READ_REQUEST', () => {
  it('keeps the detail initial state', () => {
    expect(reducer(
      initialState,
      action(actions.RESOURCE_DETAIL_READ_REQUEST)
    )).toEqual(state())
  })

  it('resets the detail to initial state in an existing state', () => {
    expect(reducer(
      state({ detail: 1 }),
      action(actions.RESOURCE_DETAIL_READ_REQUEST)
    )).toEqual(state())
  })
})

describe('RESOURCE_DETAIL_READ_SUCCESS', () => {
  it('sets detail in the initial state', () => {
    expect(reducer(
      initialState,
      action(actions.RESOURCE_DETAIL_READ_SUCCESS, 1)
    )).toEqual(state({ detail: 1 }))
  })

  it('overrides detail in an existing state', () => {
    expect(reducer(
      state({ detail: 1 }),
      action(actions.RESOURCE_DETAIL_READ_SUCCESS, 2)
    )).toEqual(state({ detail: 2 }))
  })
})

describe('RESOURCE_UPDATE_SUCCESS', () => {
  it('updates non-object data', () => {
    expect(reducer(
      state({ list: [4, 5, 6] }),
      action(actions.RESOURCE_UPDATE_SUCCESS, 8, { request: { needle: 5 } })
    )).toEqual(state({ list: [4, 8, 6] }))
  })

  it('updates an object data', () => {
    expect(reducer(
      state({ list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }] }),
      action(
        actions.RESOURCE_UPDATE_SUCCESS,
        { title: 'test3' },
        { request: { needle: { id: 2 } } }
      )
    )).toEqual(state({ list: [{ id: 1, title: 'test' }, { id: 2, title: 'test3' }] }))
  })

  it('does nothing when data is not in state', () => {
    expect(reducer(
      state({ list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }] }),
      action(
        actions.RESOURCE_UPDATE_SUCCESS,
        { title: 'test3' },
        { request: { needle: { id: 3 } } }
      )
    )).toEqual(state({ list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }] }))
  })
})

describe('RESOURCE_DELETE_SUCCESS', () => {
  it('keeps the initial state', () => {
    expect(reducer(
      initialState,
      action(action.RESOURCE_DELETE_SUCCESS)
    )).toEqual(initialState)
  })

  it('removes from list in existing state', () => {
    expect(reducer(
      state({ list: [1, 2, 3] }),
      action(actions.RESOURCE_DELETE_SUCCESS, undefined, { request: { needle: 2 } })
    )).toEqual(state({ list: [1, 3] }))
  })
})
