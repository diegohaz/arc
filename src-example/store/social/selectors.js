// https://github.com/diegohaz/arc/wiki/Selectors
export const initialState = {
  user: null,
}

export const getUser = (state = initialState) => state.user || initialState.user
