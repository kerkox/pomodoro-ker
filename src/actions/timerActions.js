import {
  DECREASE_TIME,
  SET_INTERVAL_ID,
  PAUSE_TIMER,
  RESET_TIMER,
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

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET_TIMER,
  });
}
