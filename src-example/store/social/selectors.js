// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const initialState = {
  user: null,
}

export const getUser = (state = initialState) => state.user || initialState.user
