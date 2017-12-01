import { pick } from 'ramda'

import { setSuccessResponse, setFailedResponse } from 'server/lib/responses'
import serializeAddress from 'server/serializers/serializeAddress'
import { createAddress, deleteAddress } from 'server/services/addresses'

const filterParams = unfilteredParams =>
  pick(['address'], unfilteredParams)

const ensureStoragePrepared = (ctx) => {
  if (!ctx.session.addresses) {
    ctx.session.addresses = []
  }
}

const get = async (ctx) => {
  try {
    ensureStoragePrepared(ctx)

    return setSuccessResponse(ctx, ctx.session.addresses.map(serializeAddress))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const post = async (ctx) => {
  try {
    ensureStoragePrepared(ctx)
    const filteredParams = filterParams(ctx.request.body)

    await createAddress(ctx, filteredParams)

    return setSuccessResponse(ctx, ctx.session.addresses.map(serializeAddress))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const del = async (ctx) => {
  try {
    ensureStoragePrepared(ctx)
    const filteredParams = filterParams(ctx.request.body)

    deleteAddress(ctx, filteredParams)

    return setSuccessResponse(ctx, ctx.session.addresses.map(serializeAddress))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  del,
  get,
  post,
}
