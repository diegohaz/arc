import { schema } from 'normalizr'

export const post = new schema.Entity('post')

export const actionsMeta = {
  POST_LIST_READ_SUCCESS: { property: 'list', schema: [post] },
  POST_CREATE_SUCCESS: { property: 'detail', schema: post },
}
