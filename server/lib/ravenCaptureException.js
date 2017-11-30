import setUpRavenClient from 'server/lib/setUpRavenClient'

/**
 * Is responsible for properly sending a Raven error.
 */
const ravenCaptureException = (err, Raven = setUpRavenClient()) => {
  Raven.captureException(err, (ravenErr, eventId) => {
    if (ravenErr) {
      console.error('Failed to send captured exception to Sentry')
    } else {
      console.log(`Reported error ${eventId}`)
    }
  })
}

export default ravenCaptureException
