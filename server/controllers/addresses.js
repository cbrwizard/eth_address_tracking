import { pick } from 'ramda'
import ethereumAddress from 'ethereum-address'

import { setSuccessResponse, setFailedResponse } from 'server/lib/responses'
import createValidationError from 'server/errors/ValidationError'
import serializeAddress from 'server/serializers/serializeAddress'

const filterParams = unfilteredParams =>
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

    return setSuccessResponse(ctx, ctx.session.addresses.map(serializeAddress))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

// TODO: use a service here.
const post = async (ctx) => {
  try {
    ensureAddressesInStorage(ctx)

    const filteredParams = filterParams(ctx.request.body)
    if (!ethereumAddress.isAddress(filteredParams.address)) {
      throw createValidationError('address', 'Must be Ethereum address')
    }
    if (isAddressAlreadyAdded(filteredParams.address, ctx.session.addresses)) {
      throw createValidationError('address', 'Address already included')
    }

    ctx.session.addresses.push({
      key: filteredParams.address,
      mockEventsLeft: MOCK_EVENTS_LEFT_INITIAL_VALUE,
    })

    return setSuccessResponse(ctx, ctx.session.addresses.map(serializeAddress))
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

// TODO: use a service here.
const del = async (ctx) => {
  try {
    ensureAddressesInStorage(ctx)
    const filteredParams = filterParams(ctx.request.body)
    ctx.session.addresses = ctx.session.addresses.filter(address =>
      address.key !== filteredParams.address
    )

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
