import { CHANGE_DEFAULT_TIME } from "../types/settingTypes"

export const changeDefaultTime = (time) => (dispatch) => {
  dispatch({
    type:CHANGE_DEFAULT_TIME,
    payload:time
  })
}