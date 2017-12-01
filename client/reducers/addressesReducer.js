import {
  SET,
} from 'client/constants/redux/addresses'
import initialState from 'client/initialState'

const addressesReducer = (state = initialState.addresses, action) => {
  switch (action.type) {
    case SET: {
      return action.payload
    }
    default:
      return state
  }
}

export default addressesReducer
