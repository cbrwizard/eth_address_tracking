import { call, put, takeLatest } from 'redux-saga/effects'
import { actions as toastrActions } from 'react-redux-toastr'
import { reset, stopSubmit } from 'redux-form'

import { removeFromState, set } from 'client/actions/addresses'
import { ADDRESSES_FORM } from 'client/constants/forms'
import { ADD, REMOVE } from 'client/constants/redux/addresses'
import { del, post } from 'client/api/addresses'

function* add(action) {
  try {
    const allAddresses = yield call(post, { address: action.payload })
    yield put(set(allAddresses))
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Added an address to watch',
      type: 'success',
    }))
    yield put(reset(ADDRESSES_FORM))
  } catch (error) {
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Something went wrong while adding an address to watch',
      type: 'error',
    }))
    yield put(stopSubmit(ADDRESSES_FORM, error.details))
  }
}

function* remove(action) {
  try {
    const allAddresses = yield call(del, { address: action.payload })
    yield put(set(allAddresses))
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Removed an address from a watch list',
      type: 'success',
    }))
  } catch (error) {
    yield put(toastrActions.add({
      position: 'top-right',
      title: 'Something went wrong while removing an address from watch list',
      type: 'error',
    }))
  }
}

function* addressesSaga() {
  yield takeLatest(ADD, add)
  yield takeLatest(REMOVE, remove)
}

export default addressesSaga
