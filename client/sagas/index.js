import addressesSaga from 'client/sagas/addressesSaga'
import eventsSaga from 'client/sagas/eventsSaga'

export default function* () {
  yield [
    addressesSaga(),
    eventsSaga(),
  ]
}
