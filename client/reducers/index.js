import { combineReducers } from 'redux'

import dayReducer from 'client/reducers/dayReducer'

export default combineReducers({
  day: dayReducer,
})
