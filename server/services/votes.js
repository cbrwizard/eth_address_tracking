import { create } from 'server/queries/votes'
import { lastDay } from 'server/queries/days'
import { appendVote } from 'server/services/days'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'
import serializeDay from 'server/serializers/day'
import { VOTED } from 'server/constants/metricNames'
import broadcastSetDay from '../broadcasts/broadcastSetDay'
import { createEvent } from './gaEvents'

const logger = getLogger()
const Raven = setUpRavenClient()

export const createVote = async (attributes, io) => {
  try {
    const saveResult = await create(attributes)
    const today = attributes._day
    await appendVote(today, attributes.shouldBuy)
    logger.info(saveResult, 'Created a Vote')

    await broadcastSetDay(io, serializeDay(await lastDay()))
    createEvent(VOTED, attributes.sessionId)

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}
