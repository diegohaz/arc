import findIndex from 'lodash/findIndex'
import { initialState } from './selectors'
import { GENERIC_CREATE, GENERIC_UPDATE, GENERIC_DELETE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERIC_CREATE:
      return {
        ...state,
        list: [ action.data, ...state.list ]
      }
    case GENERIC_UPDATE:
    case GENERIC_DELETE:
      return find(state, action)
    default:
      return state
  }
}

const find = (state, action) => {
  const index = findIndex(state.list, action.data)
  if (index < 0) {
    return state
  }

  switch (action.type) {
    case GENERIC_UPDATE:
      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          { ...state.list[index], ...action.newData },
          ...state.list.slice(index + 1)
        ]
      }
    case GENERIC_DELETE:
      return {
        ...state,
        list: [ ...state.list.slice(0, index), ...state.list.slice(index + 1) ]
      }
  }
}
