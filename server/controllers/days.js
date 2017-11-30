import { lastDay } from 'server/queries/days'
import { createDay } from 'server/services/days'
import serializeDay from 'server/serializers/day'
import { setFailedResponse } from 'server/lib/responses'
import shouldCreateDay from '../policies/shouldCreateDay'
import canVoteToday from '../policies/canVoteToday'
import Web3 from 'web3'

const get = async (ctx) => {
  try {
    let day
    if (await shouldCreateDay()) {
      day = await createDay()
    } else {
      day = await lastDay()
    }
    const serializedDay = serializeDay(day)

    ctx.body = {
      canVoteToday: await canVoteToday(day, ctx.sessionId),
      record: serializedDay,
    }
    return true
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const eth = async (ctx) => {
  try {

    console.log('in eth')
    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    console.log(web3)
    const balance = web3.eth.getBalance("0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8").toString();
    console.log(balance)

    ctx.body = {
      balance: balance,
    }
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
  eth,
}
