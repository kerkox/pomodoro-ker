import React, { Component } from "react";
import { connect } from "react-redux";
import * as timerActions from "../../actions/timerActions";

class Timer extends Component {
  
  componentDidMount() {
    if(this.props.intervalID === 0){
      this.props.loadDefault();
    }
    // this.pause();
  }

  getTimerString = (time) => {
    return `${this.timeString(time.minutes)}:${this.timeString(time.seconds)}`;
  };

  timeString = (time) => {
    return time < 10 ? "0" + time : time;
  };

  decreaseTime = () => {
    this.props.decreaseTime();
  };
  pause = () => {
    console.log("Pause the timer!!");
    this.props.pauseTime();
  };
  reset = () => {
    this.props.resetTime();
  };

  start = () => {
    if (this.props.intervalID === 0) {
      let intervalID = setInterval(() => {
        this.decreaseTime();
      }, 1000);
      this.props.setIntervalID(intervalID);
    }
  };

  render() {
    return (
      <div className="box">
        <div className="center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header text-center">
              <h1>{this.getTimerString(this.props.time)}</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.start}
                  >
                    Start
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.pause}
                  >
                    Pause
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.timerReducer;
};

export default connect(mapStateToProps, timerActions)(Timer);
