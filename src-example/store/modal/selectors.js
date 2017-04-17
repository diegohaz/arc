// https://github.com/diegohaz/arc/wiki/Selectors
export const initialState = {}

export const isOpen = (state = initialState, name) => !!state[name]
