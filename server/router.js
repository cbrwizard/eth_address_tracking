import Router from 'koa-router'

import pagesController from 'server/controllers/pages'
import daysController from 'server/controllers/days'
import votesController from 'server/controllers/votes'

const router = new Router()

router
  .get('/', pagesController.get)
  .get('/eth', daysController.eth)
  .get('/day', daysController.get)
  .post('/votes', votesController.post)

export default router
