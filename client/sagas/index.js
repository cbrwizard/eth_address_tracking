import daySaga from 'client/sagas/daySaga'
import votesSaga from 'client/sagas/votesSaga'

export default function* () {
  yield [
    daySaga(),
    votesSaga(),
  ]
}
