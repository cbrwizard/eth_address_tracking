import { call, put, takeLatest } from 'redux-saga/effects'

import { setCanVoteToday } from 'client/actions/day'
import { CREATE } from 'client/constants/redux/votes'
import { post } from 'client/api/votes'
import setUpRavenClient from 'client/lib/setUpRavenClient'

const Raven = setUpRavenClient()

function* create(action) {
  try {
    yield call(post, { shouldBuy: action.payload })
    // Notice that we don't accept the updated day here. Websockets
    // will handle it.
    yield put(setCanVoteToday(false))
  } catch (error) {
    Raven.captureException(error)
  }
}

function* votesSaga() {
  yield takeLatest(CREATE, create)
}

export default votesSaga
