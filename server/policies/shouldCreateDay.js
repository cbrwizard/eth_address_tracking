import { lastDay } from 'server/queries/days'

/**
 * Is responsible for telling whether a new Day record should be created.
 */
const shouldCreateDay = async () => {
  const today = new Date()
  today.setUTCHours(0, 0, 0, 0)
  const lastRecord = await lastDay()

  return !lastRecord || today > lastRecord.startDate
}

export default shouldCreateDay
