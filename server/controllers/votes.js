import { pick } from 'ramda'

import { lastDay } from 'server/queries/days'
import { createVote } from 'server/services/votes'
import { setCreatedResponse, setFailedResponse } from 'server/lib/responses'

const filterPostParams = unfilteredParams =>
  pick(['shouldBuy'], unfilteredParams)

const post = async (ctx) => {
  try {
    const filteredParams = filterPostParams(ctx.request.body)
    const today = await lastDay()
    const voteParams = {
      ...filteredParams,
      _day: today,
      sessionId: ctx.sessionId,
    }
    const createdVote = await createVote(voteParams, ctx.io)

    return setCreatedResponse(ctx, createdVote)
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  post,
}
