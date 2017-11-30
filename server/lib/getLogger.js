import bunyan from 'bunyan'
import bunyanLogentries from 'bunyan-logentries'

import isProduction from 'shared/lib/isProduction'

const config = { name: 'shouldibuybitcoin' }

if (isProduction) {
  config.streams = [
    {
      level: 'info',
      stream: bunyanLogentries.createStream({
        levels: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
        token: process.env.LOGENTRIES_BUNYAN_TOKEN,
      }),
      type: 'raw',
    },
  ]
} else {
  config.level = 'debug'
}

/**
 * Is responsible for returning a configured logger instance.
 */
const getLogger = () => bunyan.createLogger(config)

export default getLogger
