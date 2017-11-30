/*
 * Is responsible for rendering the whole app.
 */
import React from 'react'
import { hydrate } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

/**
 * Is responsible for rendering the whole app in the window.
 * Also turns on Google Analytics.
 */
const render = (Root, store) => {
  return hydrate(
    <Root store={store} />,
    document.getElementById('root')
  )
}

export default render
