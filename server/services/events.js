import faker from 'faker'

import broadcastReceiveEvent from 'server/broadcasts/broadcastReceiveEvent'
import delay from 'server/lib/delay'

/**
 * Is responsible for creating and broadcasting a fake event.
 */
const createEvent = async (io, fromAddressKey) => {
  try {
    const fakeEventParams = {
      data: faker.random.uuid(),
      value: `${faker.random.number()} ETH`,
    }
    if (faker.random.boolean()) {
      fakeEventParams.to = fromAddressKey
      fakeEventParams.from = `0x${faker.internet.password(38)}`
    } else {
      fakeEventParams.from = fromAddressKey
      fakeEventParams.to = `0x${faker.internet.password(38)}`
    }
    await broadcastReceiveEvent(io, fakeEventParams)
  } catch (err) {
    throw err
  }
}

/**
 * Is responsible for emitting fake events a certain amount of times
 * with a random delay.
 */
export const emitFakeEvent = async (io, storage, fromAddressKey) => {
  const addressInSession = storage.addresses
    .find(address => address.key === fromAddressKey)

  if (addressInSession && addressInSession.mockEventsLeft) {
    addressInSession.mockEventsLeft -= 1
    await createEvent(io, addressInSession.key)
    await delay(faker.random.number({ max: 2000, min: 500 }))
    return emitFakeEvent(io, storage, fromAddressKey)
  }
}
