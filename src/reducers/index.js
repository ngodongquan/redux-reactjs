import hobbyReducer from './hobbyReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  hobby: hobbyReducer
})

export default rootReducer
