/*
 * Is responsible for rendering the whole app.
 */
import React from 'react'
import { object } from 'prop-types'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import ReduxToastr from 'react-redux-toastr'
import isNode from 'is-node'

import App from './App'

const propTypes = {
  store: object.isRequired,
}

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <IntlProvider>
        <App isNode={isNode} />
      </IntlProvider>
      <ReduxToastr />
    </div>
  </Provider>
)

Root.propTypes = propTypes

export default Root
