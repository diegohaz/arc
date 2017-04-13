import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('RESOURCE_CREATE_SUCCESS', () => {
  it('adds the new data to the initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_CREATE_SUCCESS,
      detail: 1,
    })).toEqual({
      ...initialState,
      list: [1],
    })
  })

  it('prepends the new data to an existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2],
    }, {
      type: actions.RESOURCE_CREATE_SUCCESS,
      detail: 3,
    })).toEqual({
      ...initialState,
      list: [3, 1, 2],
    })
  })
})

describe('RESOURCE_LIST_READ_REQUEST', () => {
  it('keeps the list initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_LIST_READ_REQUEST,
    })).toEqual(initialState)
  })

  it('resets the list to initial state in an existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2, 3],
    }, {
      type: actions.RESOURCE_LIST_READ_REQUEST,
    })).toEqual(initialState)
  })
})

describe('RESOURCE_LIST_READ_SUCCESS', () => {
  it('sets list in the initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_LIST_READ_SUCCESS,
      list: [1, 2, 3],
    })).toEqual({
      ...initialState,
      list: [1, 2, 3],
    })
  })

  it('overrides list in an existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2, 3],
    }, {
      type: actions.RESOURCE_LIST_READ_SUCCESS,
      list: [3, 2, 1],
    })).toEqual({
      ...initialState,
      list: [3, 2, 1],
    })
  })
})

describe('RESOURCE_DETAIL_READ_REQUEST', () => {
  it('keeps the detail initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_DETAIL_READ_REQUEST,
    })).toEqual(initialState)
  })

  it('resets the detail to initial state in an existing state', () => {
    expect(reducer({
      ...initialState,
      detail: 1,
    }, {
      type: actions.RESOURCE_DETAIL_READ_REQUEST,
    })).toEqual(initialState)
  })
})

describe('RESOURCE_DETAIL_READ_SUCCESS', () => {
  it('sets detail in the initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_DETAIL_READ_SUCCESS,
      detail: 1,
    })).toEqual({
      ...initialState,
      detail: 1,
    })
  })

  it('overrides detail in an existing state', () => {
    expect(reducer({
      ...initialState,
      detail: 1,
    }, {
      type: actions.RESOURCE_DETAIL_READ_SUCCESS,
      detail: 2,
    })).toEqual({
      ...initialState,
      detail: 2,
    })
  })
})

describe('RESOURCE_UPDATE_SUCCESS', () => {
  it('updates non-object data', () => {
    expect(reducer({
      ...initialState,
      list: [4, 5, 6],
    }, {
      type: actions.RESOURCE_UPDATE_SUCCESS,
      needle: 5,
      detail: 8,
    })).toEqual({
      ...initialState,
      list: [4, 8, 6],
    })
  })

  it('updates an object data', () => {
    expect(reducer({
      ...initialState,
      list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }],
    }, {
      type: actions.RESOURCE_UPDATE_SUCCESS,
      needle: { id: 2 },
      detail: { title: 'test3' },
    })).toEqual({
      ...initialState,
      list: [{ id: 1, title: 'test' }, { id: 2, title: 'test3' }],
    })
  })

  it('does nothing when data is not in state', () => {
    expect(reducer({
      ...initialState,
      list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }],
    }, {
      type: actions.RESOURCE_UPDATE_SUCCESS,
      needle: { id: 3 },
      detail: { title: 'test3' },
    })).toEqual({
      ...initialState,
      list: [{ id: 1, title: 'test' }, { id: 2, title: 'test2' }],
    })
  })
})

describe('RESOURCE_DELETE_SUCCESS', () => {
  it('keeps the initial state', () => {
    expect(reducer(initialState, {
      type: actions.RESOURCE_DELETE_SUCCESS,
    })).toEqual(initialState)
  })

  it('removes from list in existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2, 3],
    }, {
      type: actions.RESOURCE_DELETE_SUCCESS,
      needle: 2,
    })).toEqual({
      ...initialState,
      list: [1, 3],
    })
  })
})
