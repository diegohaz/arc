// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
import * as actions from './actions'

test('entitiesReceive', () => {
  expect(actions.entitiesReceive('test')).toEqual({
    type: actions.ENTITIES_RECEIVE,
    payload: 'test',
  })
})
