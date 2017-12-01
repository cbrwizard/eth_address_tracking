import deepFreeze from 'deep-freeze'
import expect from 'expect'
import faker from 'faker'

import eventsReducer from 'client/reducers/eventsReducer'
import { ADD } from 'client/constants/redux/events'

const generateFakeEvent = () => ({
  from: `0x${faker.internet.password(38)}`,
  data: faker.random.uuid(),
  to: `0x${faker.internet.password(38)}`,
  value: `${faker.random.number()} ETH`,
})

describe('eventsReducer', () => {
  describe('SET', () => {
    it('returns a correct new state', () => {
      const newEvent = generateFakeEvent()
      const oldEvent = generateFakeEvent()
      const stateBefore = [oldEvent]
      const action = {
        payload: newEvent,
        type: ADD,
      }
      deepFreeze(stateBefore)

      const expected = [oldEvent, newEvent]
      const actual = eventsReducer(stateBefore, action)

      expect(actual).toEqual(expected)
    })
  })

  describe('unknown action', () => {
    it('returns a correct new state', () => {
      const stateBefore = { events: [] }
      const action = {
        type: 'unknown',
      }
      deepFreeze(stateBefore)

      const expected = stateBefore
      const actual = eventsReducer(stateBefore, action)
      expect(actual).toEqual(expected)
    })
  })
})
