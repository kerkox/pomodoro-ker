import React, { Component } from "react";
import { connect } from "react-redux";

import * as settingActions from "../../actions/settingActions";
import * as timerActions from "../../actions/timerActions";

const { changeDefaultTime } = settingActions;
const { decreaseTime, pauseTime, resetTime, setIntervalID,loadDefault } = timerActions;

class Settings extends Component {
  componentDidMount() {
    this.props.loadDefault();
  }

  handleChange = (e) => {
    const timeMinutes = e.target.value;
    this.props.changeDefaultTime(timeMinutes);
  };
  render() {
    console.log("this.props", this.props);
    console.log('minutes',this.props.timerReducer.time.minutes);
    return (
      <div className="box">
        <div className="center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header text-center">Change Settings</div>
            <div className="card-body">
              <div className="row">
                <input
                  type="number"
                  onChange={this.handleChange}
                  name="time-minutes"
                  value={Number(this.props.timerReducer.time.minutes)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ timerReducer, settingReducer }) => {
  return {
    timerReducer,
    settingReducer,
  };
};
const mapDispatchToProps = {
  changeDefaultTime,
  decreaseTime,
  pauseTime,
  resetTime,
  setIntervalID,
  loadDefault
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
