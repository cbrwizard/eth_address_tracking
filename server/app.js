import IO from 'koa-socket'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import cors from 'kcors'
import redisStore from 'koa-redis'
import session from 'koa-generic-session'
import koaHelmet from 'koa-helmet'
import koaBunyanLogger from 'koa-bunyan-logger'

import router from 'server/router'
import getLogger from 'server/lib/getLogger'

const logger = getLogger()
// setUpJobProcessors()
const app = new Koa()
const io = new IO()
io.attach(app)

app.keys = [process.env.KOA_SECRET]
app
  .use(koaBunyanLogger(logger))
  .use(koaHelmet())
  .use(cors({ credentials: true }))
  .use(bodyParser())
  .use(convert(session({
    store: redisStore({ host: process.env.REDIS_HOST }),
  })))
  .use(async (ctx, next) => {
    ctx.sessionSave = true
    await next()
  })
  .use(async (ctx, next) => {
    // TODO: find a better way to allow io to be used in routes.
    if (!ctx.io) ctx.io = io

    ctx.log.info({ request: ctx.request })

    await next()
  })
  .use(router.routes())
  .use(router.allowedMethods())

io.on('connection', () => {
  console.log('Client connected')
})

export { io }
export default app
