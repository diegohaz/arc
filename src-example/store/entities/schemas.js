import { schema } from 'normalizr'

export const post = new schema.Entity('post')

export const actions = {
  POST_LIST_READ_SUCCESS: [post],
  POST_CREATE_SUCCESS: post,
}
