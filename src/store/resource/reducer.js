import findIndex from 'lodash/findIndex'
import { initialState } from './selectors'
import {
  RESOURCE_CREATE_SUCCESS,
  RESOURCE_LIST_READ_REQUEST,
  RESOURCE_LIST_READ_SUCCESS,
  RESOURCE_DETAIL_READ_REQUEST,
  RESOURCE_DETAIL_READ_SUCCESS,
  RESOURCE_UPDATE_SUCCESS,
  RESOURCE_DELETE_SUCCESS,
} from './actions'


const updateOrDeleteReducer = (state, action) => {
  const needleIsObject = typeof action.needle === 'object'
  const index = needleIsObject
    ? findIndex(state.list, action.needle)
    : state.list.indexOf(action.needle)

  if (index < 0) {
    return state
  }

  switch (action.type) {
    case RESOURCE_UPDATE_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          typeof action.needle === 'object'
            ? { ...state.list[index], ...action.detail }
            : action.detail,
          ...state.list.slice(index + 1),
        ],
      }
    case RESOURCE_DELETE_SUCCESS:
      return {
        ...state,
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)],
      }
    // istanbul ignore next
    default:
      return state
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESOURCE_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }

    case RESOURCE_LIST_READ_REQUEST:
      return {
        ...state,
        list: initialState.list,
      }
    case RESOURCE_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }

    case RESOURCE_DETAIL_READ_REQUEST:
      return {
        ...state,
        detail: initialState.detail,
      }
    case RESOURCE_DETAIL_READ_SUCCESS:
      return {
        ...state,
        detail: action.detail,
      }

    case RESOURCE_UPDATE_SUCCESS:
    case RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, action)

    default:
      return state
  }
}
