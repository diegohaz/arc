import { POST_LIST_SUCCESS, POST_CREATE_SUCCESS } from '../post/actions'
import { schema } from 'normalizr'

export const post = new schema.Entity('post')

export const actionsMeta = {
  [POST_LIST_SUCCESS]: { property: 'list', schema: [post] },
  [POST_CREATE_SUCCESS]: { property: 'data', schema: post }
}
