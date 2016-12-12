import { Router } from 'express'
import post from 'api/post'

const router = new Router()

router.use('/posts', post)

export default router
