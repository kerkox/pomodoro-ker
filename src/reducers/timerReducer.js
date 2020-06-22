import {
  DECREASE_TIME,
  PAUSE_TIMER,
  SET_INTERVAL_ID,
  RESET_TIMER,
  LOAD_DATA_CONFIG,
} from "../types/timerTypes";

const INITIAL_STATE = {
  timeConfig: {
    minutes: 25,
  },
  time: {
    minutes: 0,
    seconds: 0,
  },
  pause: false,
  intervalID: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_DATA_CONFIG:
      //load data from localStorage if there not information then
      // set time by default value
      console.log('i change the data')
      const loadData = JSON.parse(localStorage.getItem("timeConfig") || "{}");
      const timeConfig = { minutes: state.timeConfig.minutes };
      if (loadData.minutes) {
        timeConfig.minutes = Number(loadData.minutes);
      }
      console.log("timeConfig", timeConfig);
      return {
        ...state,
        timeConfig,
        time: { minutes: timeConfig.minutes, seconds: 0 },
      };
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

      return { ...state, time: time };
    case PAUSE_TIMER:
      clearInterval(state.intervalID);
      return { ...state, intervalID: 0 };
    case SET_INTERVAL_ID:
      return { ...state, intervalID: action.payload };
    case RESET_TIMER:
      if (state.intervalID !== 0) clearInterval(state.intervalID);
      return {
        ...state,
        intervalID:0,
        time: { minutes: state.timeConfig.minutes, seconds: 0 },
      };
    default:
      return state;
  }
};
