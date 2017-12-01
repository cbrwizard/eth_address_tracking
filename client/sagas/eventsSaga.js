import { put, select, takeLatest } from 'redux-saga/effects'
import { actions as toastrActions } from 'react-redux-toastr'

import { add } from 'client/actions/events'
import { RECEIVE } from 'client/constants/redux/events'

const addressesSelector = state => state.app.addresses

function* receive(action) {
  try {
    const addresses = yield select(addressesSelector)
    const shouldDisplayEvent =
      addresses.includes(action.payload.to) ||
      addresses.includes(action.payload.from)

    if (shouldDisplayEvent) {
      yield put(add(action.payload))
    }
  } catch (error) {
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Something went wrong while loading events',
      type: 'error',
    }))
  }
}

function* eventsSaga() {
  yield takeLatest(RECEIVE, receive)
}

export default eventsSaga
