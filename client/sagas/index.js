import addressesSaga from 'client/sagas/addressesSaga'

export default function* () {
  yield [
    addressesSaga(),
  ]
}
