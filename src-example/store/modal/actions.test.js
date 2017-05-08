// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
import * as actions from './actions'

test('modalShow', () => {
  expect(actions.modalShow('test')).toEqual({
    type: actions.MODAL_SHOW,
    payload: {
      name: 'test',
    },
  })
})

test('modalHide', () => {
  expect(actions.modalHide('test')).toEqual({
    type: actions.MODAL_HIDE,
    payload: {
      name: 'test',
    },
  })
})
