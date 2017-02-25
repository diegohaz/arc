export const initialState = {
  list: [],
  detail: null,
}

export const getList = (state = initialState) => state.list || initialState.list
export const getDetail = (state = initialState) => state.detail || initialState.detail
