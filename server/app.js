import IO from 'koa-socket'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import cors from 'kcors'
import koaHelmet from 'koa-helmet'
import serve from 'koa-static'
import session from 'koa-generic-session'

import router from 'server/router'

const app = new Koa()
const io = new IO()
io.attach(app)

app.keys = [process.env.KOA_SECRET]
app
  .use(koaHelmet())
  .use(cors({ credentials: true }))
  .use(serve('dist'))
  .use(bodyParser())
  .use(convert(session()))
  .use(async (ctx, next) => {
    ctx.sessionSave = true
    await next()
  })
  .use(async (ctx, next) => {
    if (!ctx.io) ctx.io = io

    await next()
  })
  .use(router.routes())
  .use(router.allowedMethods())

io.on('connection', () => {
  console.log('Client connected')
})

export { io }
export default app
