/**
* Is responsible for configuring a Raven client for the client.
* @return {Raven} instance.
* @see https://gist.github.com/impressiver/5092952
*/
import Raven from 'raven-js'

import ravenConfig from 'shared/lib/ravenConfig'

const isProduction = require('shared/lib/isProduction')

const setUpRavenClient = () =>
  Raven.config(
    isProduction &&
      `https://${process.env.SENTRY_PUBLIC_KEY}@sentry.io/${process.env
        .SENTRY_PROJECT_ID}`,
    ravenConfig
  ).install()

export default setUpRavenClient
