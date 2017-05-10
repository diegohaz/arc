// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
export const initialState = {
  list: [],
}

export const getList = (state = initialState) => state.list || initialState.list
