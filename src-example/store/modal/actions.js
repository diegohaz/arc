// https://github.com/diegohaz/arc/wiki/Actions
export const MODAL_SHOW = 'MODAL_SHOW'
export const MODAL_HIDE = 'MODAL_HIDE'

export const modalShow = (name) => ({
  type: MODAL_SHOW,
  name,
})

export const modalHide = (name) => ({
  type: MODAL_HIDE,
  name,
})
