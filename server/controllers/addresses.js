import { pick } from 'ramda'
import ethereumAddress from 'ethereum-address'

import { setSuccessResponse, setFailedResponse } from 'server/lib/responses'
import createValidationError from 'server/errors/ValidationError'

const filterPostParams = unfilteredParams =>
  pick(['address'], unfilteredParams)

const isAddressAlreadyAdded = (address, addedAddresses) =>
  addedAddresses.some(addedAddress => addedAddress.key === address)

const MOCK_EVENTS_LEFT_INITIAL_VALUE = 25

const ensureAddressesInStorage = (ctx) => {
  if (!ctx.session.addresses) {
    ctx.session.addresses = []
  }
}

const get = async (ctx) => {
  try {
    ensureAddressesInStorage(ctx)

    ctx.body = ctx.session.addresses
    return setSuccessResponse(ctx)
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

const post = async (ctx) => {
  try {
    const filteredParams = filterPostParams(ctx.request.body)
    if (!ethereumAddress.isAddress(filteredParams.address)) {
      throw createValidationError('Must be Ethereum address')
    }
    if (isAddressAlreadyAdded(filteredParams.address, ctx.session.addresses)) {
      throw createValidationError('Address already included')
    }

    ensureAddressesInStorage(ctx)

    ctx.session.addresses.push({
      key: filteredParams.address,
      mockEventsLeft: MOCK_EVENTS_LEFT_INITIAL_VALUE,
    })

    // cur: move to a serializer
    return setSuccessResponse(ctx, ctx.session.addresses.map(address => address.key))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
  post,
}
