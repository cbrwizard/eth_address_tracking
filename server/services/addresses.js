import { emitFakeEvent } from 'server/services/events'
import createValidationError from 'server/errors/ValidationError'
import isEthereumAddress from 'shared/lib/isEthereumAddress'

const isAddressAlreadyAdded = (address, addedAddresses) =>
  addedAddresses.some(addedAddress => addedAddress.key === address)

const MOCK_EVENTS_LEFT_INITIAL_VALUE = 25

/**
 * Is responsible for creating an address.
 */
export const createAddress = async (ctx, filteredParams) => {
  if (!isEthereumAddress(filteredParams.address)) {
    throw createValidationError('address', 'Must be Ethereum address')
  }
  if (isAddressAlreadyAdded(filteredParams.address, ctx.session.addresses)) {
    throw createValidationError('address', 'Address already included')
  }

  const newAddress = {
    key: filteredParams.address,
    mockEventsLeft: MOCK_EVENTS_LEFT_INITIAL_VALUE,
  }

  ctx.session.addresses.push(newAddress)

  // No need to wait for it.
  emitFakeEvent(ctx.io, ctx.session, newAddress.key)
}

/**
 * Is responsible for deleting an address.
 */
export const deleteAddress = (ctx, filteredParams) => {
  ctx.session.addresses = ctx.session.addresses.filter(address => address.key !== filteredParams.address)
}
