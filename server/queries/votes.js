import Vote from 'server/models/Vote'

export const create = attributes => new Vote(attributes).save()

export const numberOfVotesForDayAndSessionId = (day, sessionId) =>
  Vote.where({ _day: day, sessionId }).count()
