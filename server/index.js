/*
 * Server startpoint.
 */
require('babel-polyfill')
require('babel-register')

const app = require('server/app').default

app.listen(process.env.API_PORT || process.env.PORT || 3000)
