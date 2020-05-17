import {
  DECREASE_TIME,
  SET_INTERVAL_ID,
  PAUSE_TIMER,
  RESET_TIMER,
  LOAD_DATA_CONFIG,
} from "../types/timerTypes";

export const decreaseTime = () => (dispatch) => {
  dispatch({
    type: DECREASE_TIME,  
  });
};

export const setIntervalID = (intervalID) => (dispatch) => {
  console.log("intervalID", intervalID);
  dispatch({
    type: SET_INTERVAL_ID,
    payload: intervalID,
  });
}

export const pauseTime = () => (dispatch) => {
  dispatch({
    type: PAUSE_TIMER
  });
}

export const resetTime = () => (dispatch) => {
  dispatch({
    type: RESET_TIMER,
  });
}

export const loadDefault = () => (dispatch) => {
  dispatch({
    type: LOAD_DATA_CONFIG
  })
}
