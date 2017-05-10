// https://github.com/diegohaz/arc/wiki/Actions
export const ENTITIES_RECEIVE = 'ENTITIES_RECEIVE'

export const entitiesReceive = entities => ({
  type: ENTITIES_RECEIVE,
  payload: entities,
})
