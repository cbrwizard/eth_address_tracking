import { END } from 'redux-saga'

import createAppStore from 'shared/lib/createAppStore'
import { lastDay } from 'server/queries/days'
import { createDay } from 'server/services/days'
import serializeDay from 'server/serializers/day'
import shouldCreateDay from '../policies/shouldCreateDay'
import canVoteToday from '../policies/canVoteToday'

const preloadedState = async (ctx) => {
  let day
  if (await shouldCreateDay()) {
    day = await createDay()
  } else {
    day = await lastDay()
  }

  return {
    app: {
      day: {
        canVoteToday: await canVoteToday(day, ctx.sessionId),
        isLoading: false,
        record: serializeDay(day),
      },
    },
  }
}

const createStore = async (ctx) => {
  const store = createAppStore(true, await preloadedState(ctx))

  // We need to tell sagas to shut up otherwise the store
  // keeps running on the server.
  store.dispatch(END)
  return store
}

export default createStore
