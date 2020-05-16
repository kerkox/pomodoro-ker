import { DECREASE_TIME, PAUSE_TIMER, SET_INTERVAL_ID, RESET_TIMER } from "../types/timerTypes"

const INITIAL_STATE = {
  time: {
    minutes: 25,
    seconds: 0
  },
  timeConfig: {
        minutes: 25,
  },
  pause: false,
  intervalID: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DECREASE_TIME:
      let seconds = state.time.seconds - 1;
      let minutes = state.time.minutes;
      if (seconds < 0) {
        seconds = 59;
        minutes -= 1;
      }
      if (minutes <= 0 && seconds <= 0) {
        clearInterval(state.intervalID);
      }
      const time = {
        seconds,
        minutes,
      };

      return {...state, time: time};
    case PAUSE_TIMER:
      clearInterval(state.intervalID);
      return {...state, intervalID: 0}
    case SET_INTERVAL_ID:
      return {...state, intervalID:action.payload}
    case RESET_TIMER:
      if (state.intervalID !== 0) clearInterval(state.intervalID);
      return {...state, time:{minutes:state.timeConfig.minutes, seconds:0}}
    default: return state
  }
}
