import { call, put, takeLatest } from 'redux-saga/effects'
import { actions as toastrActions } from 'react-redux-toastr'

import { append } from 'client/actions/addresses'
import { ADD } from 'client/constants/redux/addresses'
import { post } from 'client/api/addresses'

function* add(action) {
  try {
    const addedAddress = yield call(post, { address: action.payload })
    // cur: make sure reducer is correct.
    yield put(append(addedAddress))
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Added an address to watch',
      type: 'success',
    }))
    // cur: reset the form here.
    // also call an action to render those addresses from the server.

  } catch (error) {
    console.error(error)
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Something went wrong while adding an address to watch',
      type: 'error',
    }))
  }
}

function* addressesSaga() {
  yield takeLatest(ADD, add)
}

export default addressesSaga
