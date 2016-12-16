import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('GENERIC_CREATE', () => {
  it('adds the new data to the initial state', () => {
    expect(reducer(initialState, {
      type: actions.GENERIC_CREATE,
      data: 3
    })).toEqual({
      ...initialState,
      list: [3]
    })
  })

  it('prepend the new data to an existing state', () => {
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
})

describe('GENERIC_UPDATE', () => {
  it('updates non-object data', () => {
    expect(reducer({
      ...initialState, list: [4, 5, 6]
    }, {
      type: actions.GENERIC_UPDATE,
      data: 5,
      newData: 8
    })).toEqual({
      ...initialState,
      list: [4, 8, 6]
    })
  })

  it('updates an object data', () => {
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

  it('does nothing when data is not in state', () => {
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
  })
})

describe('GENERIC_DELETE', () => {
  it('deletes non-object data', () => {
    expect(reducer({
      ...initialState, list: [4, 5, 6]
    }, {
      type: actions.GENERIC_DELETE,
      data: 5
    })).toEqual({
      ...initialState,
      list: [4, 6]
    })
  })

  it('deletes an object data', () => {
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

  it('does nothing when data is not in state', () => {
    expect(reducer({
      ...initialState, list: [{ id: 1, title: 'test' }, { id: 2, title: 'test' }]
    }, {
      type: actions.GENERIC_DELETE,
      data: { id: 3 }
    })).toEqual({
      ...initialState,
      list: [{ id: 1, title: 'test' }, { id: 2, title: 'test' }]
    })
  })
})
