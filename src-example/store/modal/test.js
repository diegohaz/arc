// https://github.com/diegohaz/arc/wiki/Testing-redux-modules
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
import { createStore } from 'redux'
import reducer from './reducer'
import { modalShow, modalHide } from './actions'
import { isOpen } from './selectors'

test('modal', () => {
  const { getState, dispatch } = createStore(reducer)

  expect(isOpen(getState(), 'foo')).toBe(false)

  dispatch(modalShow('foo'))
  expect(isOpen(getState(), 'foo')).toBe(true)

  dispatch(modalHide('foo'))
  expect(isOpen(getState(), 'foo')).toBe(false)
})

