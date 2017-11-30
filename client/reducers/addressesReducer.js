import {
  ADD,
  APPEND,
} from 'client/constants/redux/addresses'
import initialState from 'client/initialState'

const addressesReducer = (state = initialState.addresses, action) => {
  switch (action.type) {
    case ADD: {
      return { ...state, canVoteToday: action.payload }
    }
    case APPEND: {
      return { ...state, record: action.payload }
    }
    default:
      return state
  }
}

export default addressesReducer
