// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { schema } from 'normalizr'

export const posts = new schema.Entity('posts')
export const comments = new schema.Entity('comments')
