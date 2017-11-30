/* eslint camelcase: 0 */
/*
 * Is responsible for rendering the whole app.
 */
import React from 'react'
import { hydrate } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ReactGA from 'react-ga'

import initializeGA from 'client/lib/initializeGA'

const isProduction = require('shared/lib/isProduction')
global.Intl = require('intl')

if (isProduction) {
  initializeGA()
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

require('intl-messageformat/dist/locale-data/en')

/**
 * Is responsible for rendering the whole app in the window.
 * Also turns on Google Analytics.
 */
const render = (Root, store) => {
  if (isProduction) {
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  return hydrate(
    <Root store={store} />,
    document.getElementById('root')
  )
}

export default render
