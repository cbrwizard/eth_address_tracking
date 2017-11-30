import {
  SET_CAN_VOTE_TODAY,
  SET_DAY,
  SET_IS_LOADING,
} from 'client/constants/redux/day'
import initialState from 'client/initialState'

const daysReducer = (state = initialState.day, action) => {
  switch (action.type) {
    case SET_CAN_VOTE_TODAY: {
      return { ...state, canVoteToday: action.payload }
    }
    case SET_DAY: {
      return { ...state, record: action.payload }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload }
    }
    default:
      return state
  }
}

export default daysReducer
