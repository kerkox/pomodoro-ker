import { CHANGE_DEFAULT_TIME } from "../types/settingTypes"

const INITIAL_STATE = {
  config: {
    time:{
      minutes: 25
    }
  }
}


export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_DEFAULT_TIME:
      return {...state, config:{time: {minutes: action.payload}}};
    default: return state;
  }
}