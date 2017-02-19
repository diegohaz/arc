import findIndex from 'lodash/findIndex'
import { initialState } from './selectors'
import {
  POST_LIST_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_READ_SUCCESS,
  POST_UPDATE_SUCCESS,
  POST_DELETE_SUCCESS
} from './actions'

const findReducer = (state, action) => {
  const isObject = typeof action.data === 'object'
  const index = isObject ? findIndex(state.list, action.data) : state.list.indexOf(action.data)

  if (index < 0) {
    return state
  }

  switch (action.type) {
    case POST_UPDATE_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          typeof action.data === 'object'
          ? { ...state.list[index], ...action.newData }
          : action.newData,
          ...state.list.slice(index + 1)
        ]
      }
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
      }
    // istanbul ignore next
    default:
      return state
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST_SUCCESS:
      return {
        ...state,
        list: action.list
      }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.data, ...state.list]
      }
    case POST_READ_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case POST_UPDATE_SUCCESS:
    case POST_DELETE_SUCCESS:
      return findReducer(state, action)
    default:
      return state
  }
}
