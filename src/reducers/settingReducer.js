import { CHANGE_DEFAULT_TIME, LOAD_DATA_SETTING } from "../types/settingTypes";

const INITIAL_STATE = {
  config: {
    time: {
      minutes: 25,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DEFAULT_TIME:
      const timeConfig = {
        minutes: action.payload,
      };
      localStorage.setItem("timeConfig", JSON.stringify(timeConfig));

      return { ...state, config: { time: { minutes: action.payload } } };
    case LOAD_DATA_SETTING:
      //load data from localStorage if there not information then
      // set time by default value
      const loadData = JSON.parse(localStorage.getItem("timeConfig") || "{}");
      const config = { time: { minutes: state.config.time.minutes } };
      if (loadData.minutes) {
        config.time.minutes = Number(loadData.minutes);
      }

      return {
        ...state,
        config,
      };
    default:
      return state;
  }
};
