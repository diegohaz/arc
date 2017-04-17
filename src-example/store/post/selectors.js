// https://github.com/diegohaz/arc/wiki/Selectors
export const initialState = {
  list: [],
}

export const getList = (state = initialState) => state.list || initialState.list
