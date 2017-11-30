/*
 * Server startpoint.
 */
require('babel-polyfill')
require('babel-register')
const dotenv = require('dotenv')

const isProduction = require('shared/lib/isProduction')
const app = require('server/app').default

const dotEnvFilePath = isProduction ? './config/.env' : './config/.env.development'

dotenv.config({ path: dotEnvFilePath })

app.listen(process.env.API_PORT || process.env.PORT || 3000)
