import React, { Component } from "react";
import { connect } from "react-redux";

import * as settingActions from "../../actions/settingActions";
// import * as timerActions from "../../actions/timerActions";

// const { changeDefaultTime, loadDefaultTimeSetting } = settingActions;
// const { decreaseTime, pauseTime, resetTime, setIntervalID,loadDefault } = timerActions;

class Settings extends Component {
  componentDidMount() {
    this.props.loadDefaultTimeSetting();
  }

  handleChange = (e) => {
    const timeMinutes = e.target.value;
    this.props.changeDefaultTime(timeMinutes);
  };
  render() {
    console.log("this.props", this.props);
    return (
      <div className="box">
        <div className="center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header text-center">Change Settings</div>
            <div className="card-body">
              <div className="row">
                <div className="form-group">
                  <label htmlFor="time-minutes">Minutes</label>
                  <input
                    id="time-minutes"
                    className="form-control"
                    type="number"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                    name="time-minutes"
                    value={Number(
                      this.props.config.time.minutes
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ settingReducer }) => settingReducer;

export default connect(mapStateToProps, settingActions)(Settings);
