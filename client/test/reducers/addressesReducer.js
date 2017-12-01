import deepFreeze from 'deep-freeze'
import expect from 'expect'

import addressesReducer from 'client/reducers/addressesReducer'
import { SET } from 'client/constants/redux/addresses'

describe('addressesReducer', () => {
  describe('SET', () => {
    it('returns a correct new state', () => {
      const newAddresses = ['0xsomething', '0xbitcoinwhat']
      const stateBefore = ['someOldAddress']
      const action = {
        payload: newAddresses,
        type: SET,
      }
      deepFreeze(stateBefore)

      const expected = newAddresses
      const actual = addressesReducer(stateBefore, action)

      expect(actual).toEqual(expected)
    })
  })

  describe('unknown action', () => {
    it('returns a correct new state', () => {
      const stateBefore = { addresses: [] }
      const action = {
        type: 'unknown',
      }
      deepFreeze(stateBefore)

      const expected = stateBefore
      const actual = addressesReducer(stateBefore, action)
      expect(actual).toEqual(expected)
    })
  })
})
