import { combineReducers } from 'redux'
import timerReducer from './timerReducer'
import settingReducer from './settingReducer'

export default combineReducers({
  timerReducer,
  settingReducer,
});