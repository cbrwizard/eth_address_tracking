/*
 * Is responsible for rendering the whole app.
 */
import React from 'react'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import App from './App'

const propTypes = {
  store: object.isRequired,
}

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <ReduxToastr />
    </div>
  </Provider>
)

Root.propTypes = propTypes

export default Root
