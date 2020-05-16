import { DECREASE_TIME } from "../types/timerTypes"

const INITIAL_STATE = {
  time: {
    minutes: 0,
    seconds: 0
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DECREASE_TIME:
      return {...state, time: action.payload};
    default: return state
  }
}
