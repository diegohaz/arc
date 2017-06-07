import { Router } from 'express'
import { index } from './controller'

const router = new Router()

router.get('/', index)

export default router
