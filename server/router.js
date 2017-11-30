import Router from 'koa-router'

import addressesController from 'server/controllers/addresses'

const router = new Router()

router
  .get('/addresses', addressesController.get)
  .post('/addresses', addressesController.post)

export default router
