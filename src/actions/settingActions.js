import { CHANGE_DEFAULT_TIME, LOAD_DATA_SETTING } from "../types/settingTypes";

export const changeDefaultTime = (time) => (dispatch) => {
  dispatch({
    type: CHANGE_DEFAULT_TIME,
    payload: time,
  });
};

export const loadDefaultTimeSetting = () => (dispatch) => {
  dispatch({
    type: LOAD_DATA_SETTING,
  });
};
