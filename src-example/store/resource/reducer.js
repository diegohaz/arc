// https://github.com/diegohaz/arc/wiki/Reducers
import findIndex from 'lodash/findIndex'
import get from 'lodash/get'
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


const updateOrDeleteReducer = (state, { type, payload, meta }) => {
  const needle = get(payload, 'needle', get(meta, 'request.needle'))
  const needleIsObject = typeof needle === 'object'
  const index = needleIsObject
    ? findIndex(state.list, needle)
    : state.list.indexOf(needle)

  if (index < 0) {
    return state
  }

  switch (type) {
    case RESOURCE_UPDATE_SUCCESS:
      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          needleIsObject ? { ...state.list[index], ...payload } : payload,
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

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case RESOURCE_CREATE_SUCCESS:
      return {
        ...state,
        list: [payload, ...state.list],
      }

    case RESOURCE_LIST_READ_REQUEST:
      return {
        ...state,
        list: initialState.list,
      }
    case RESOURCE_LIST_READ_SUCCESS:
      return {
        ...state,
        list: payload,
      }

    case RESOURCE_DETAIL_READ_REQUEST:
      return {
        ...state,
        detail: initialState.detail,
      }
    case RESOURCE_DETAIL_READ_SUCCESS:
      return {
        ...state,
        detail: payload,
      }

    case RESOURCE_UPDATE_SUCCESS:
    case RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, { type, payload, meta })

    default:
      return state
  }
}
