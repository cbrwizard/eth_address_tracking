import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createSocketIoMiddleware from 'redux-socket.io'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'
import io from 'socket.io-client'

import { SOCKET_IO_ACTION_PREFIX } from 'client/constants/websockets'
import rootSaga from 'client/sagas'
import rootReducer from 'client/reducers'

const createAppStore = () => {
  let createStoreWithMiddleware
  let sagaMiddleware

  const socket = io(process.env.API_BASE)
  const socketIoMiddleware = createSocketIoMiddleware(
    socket,
    SOCKET_IO_ACTION_PREFIX
  )

  sagaMiddleware = createSagaMiddleware({
    onError: error => console.error('UNCAUGHT ERROR IN SAGAS: ', error),
  })

  // Enables chrome dev tool
  const devTools =
    typeof window !== 'undefined' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f

  const middlewares = [sagaMiddleware, socketIoMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger({
      collapsed: true,
    })
    // Must always go last
    middlewares.push(loggerMiddleware)
  }

  createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    devTools
  )(createStore)

  const combinedReducer = combineReducers({
    app: rootReducer,
    form: formReducer,
    toastr: toastrReducer,
  })

  const createdStore = createStoreWithMiddleware(combinedReducer)
  sagaMiddleware.run(rootSaga)

  return createdStore
}

export default createAppStore()
