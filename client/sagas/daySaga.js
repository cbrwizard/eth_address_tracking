import { call, put, takeLatest } from 'redux-saga/effects'

import { FETCH } from 'client/constants/redux/day'
import { index } from 'client/api/day'
import { setIsLoading, setDay, setCanVoteToday } from 'client/actions/day'
import setUpRavenClient from 'client/lib/setUpRavenClient'

const Raven = setUpRavenClient()

function* fetch() {
  try {
    yield put(setIsLoading(true))
    const response = yield call(index)
    yield put(setDay(response.record))
    yield put(setCanVoteToday(response.canVoteToday))
  } catch (error) {
    Raven.captureException(error)
  } finally {
    yield put(setIsLoading(false))
  }
}

function* daysSaga() {
  yield takeLatest(FETCH, fetch)
}

export default daysSaga
