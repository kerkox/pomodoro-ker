import React, { Component } from "react";
import { connect } from 'react-redux'
import * as timerActions from '../../actions/timerActions';

class Timer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     timeConfig: {
  //       minutes: 25,
  //     },
  //     timeMinutes: 25,
  //     timeSeconds: 0,
  //     pause: false,
  //     intervalID: 0,
  //   };
  // }

  componentDidMount() {
    this.pause();
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
    this.props.reset();
  };

  start = () => {
    if (this.props.intervalID === 0) {
      let intervalID = setInterval(
        () => {
          this.decreaseTime();
        },
        1000
      );
      this.props.setIntervalID(intervalID);
    }
  };

  render() {
    return (
      <div className="box">
        <div className="center">
          <h1>
            {this.getTimerString(this.props.time) }
          </h1>
          <button type="button" onClick={this.start}>
            Start
          </button>
          <button type="button" onClick={this.pause}>
            Pause
          </button>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.timerReducer;
}

export default connect(mapStateToProps, timerActions)(Timer);
