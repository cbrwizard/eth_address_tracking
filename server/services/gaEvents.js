import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'
import getGA from 'server/lib/getGA'
import isProduction from 'shared/lib/isProduction'
import { VOTED } from 'server/constants/metricNames'

const logger = getLogger()
const Raven = setUpRavenClient()
const GA = getGA()

const recognizedEventParams = (metricName, userId) => {
  const action = `Passed ${metricName}`
  return {
    action,
    category: 'business',
    params: {
      userId,
    },
    // Note: must be integer.
    value: 1,
  }
}

const getEventParams = (type, userId) => {
  switch (type) {
    case VOTED: {
      return recognizedEventParams(VOTED, userId)
    }
    default:
      throw new Error('unrecognized GA event type')
  }
}

/**
 * Is responsible for creating and sending a GA event.
 * @note quite possibly in the future it will need a 2nd param 'attributes'.
 */
export const createEvent = (type, userId) =>
  new Promise((resolve, reject) => {
    try {
      if (isProduction) {
        const eventParams = getEventParams(type, userId)

        GA.event(
          eventParams.category,
          eventParams.action,
          eventParams.label,
          eventParams.value,
          eventParams.params,
          (err) => {
            if (err) {
              // Hopefully it gets caught by that catch block.
              Raven.captureException(err)
              logger.error({ err, stack: err.stack })
              throw err
            } else {
              logger.info(
                { ...eventParams, type, userId },
                'Created a GA event'
              )
              resolve()
            }
          }
        )
      }
    } catch (err) {
      Raven.captureException(err)
      logger.error({ err, stack: err.stack })
      reject(err)
    }
  })
