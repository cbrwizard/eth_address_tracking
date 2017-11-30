import { create, update } from 'server/queries/days'
import setUpRavenClient from 'server/lib/setUpRavenClient'
import getLogger from 'server/lib/getLogger'

const logger = getLogger()
const Raven = setUpRavenClient()

export const createDay = async () => {
  try {
    const saveResult = await create()
    logger.info(null, 'Started a new day')

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}

export const appendVote = async (day, shouldBuy) => {
  try {
    const attributes = {}
    if (shouldBuy) {
      attributes.yesCount = day.yesCount + 1
    } else {
      attributes.noCount = day.noCount + 1
    }
    const saveResult = await update(day, attributes)
    logger.info({ attributes, id: day._id }, 'Updated a day')

    return saveResult
  } catch (err) {
    Raven.captureException(err)
    logger.error({ err, stack: err.stack })
    throw err
  }
}
