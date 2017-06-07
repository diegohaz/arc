// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import * as actions from './actions'

test('entitiesReceive', () => {
  expect(actions.entitiesReceive('test')).toEqual({
    type: actions.ENTITIES_RECEIVE,
    payload: 'test',
  })
})
