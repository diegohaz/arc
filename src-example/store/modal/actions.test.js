// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import * as actions from './actions'

test('modalShow', () => {
  expect(actions.modalShow('test')).toEqual(
    expect.objectContaining({
      type: actions.MODAL_SHOW,
      payload: {
        name: 'test',
      },
    })
  )
})

test('modalHide', () => {
  expect(actions.modalHide('test')).toEqual({
    type: actions.MODAL_HIDE,
    payload: {
      name: 'test',
    },
  })
})
