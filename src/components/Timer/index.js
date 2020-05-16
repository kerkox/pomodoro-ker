import React, { Component } from "react";
import { connect } from 'react-redux'

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
    let seconds = this.state.time.seconds - 1;
    let minutes = this.state.time.minutes;
    if (seconds < 0) {
      seconds = 59;
      minutes -= 1;
    }
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(this.state.intervalID);
    }
    this.setState({
      ...this.state,
      time: { 
        seconds,
        minutes
      }
    });
  };
  pause = () => {
    console.log("Pause the timer!!");
    clearInterval(this.state.intervalID);
    this.setState({ ...this.state, intervalID: 0 });
  };
  reset = () => {
    this.setState({
      ...this.state,
      time:{
        minutes: this.state.timeConfig.minutes,
        seconds: 0,
      }
    });
  };

  start = () => {
    if (this.state.intervalID === 0) {
      console.log("this", this);
      console.log("this.state", this.state);
      let intervalID = setInterval(
        () => {
          this.decreaseTime();
        },
        1000,
        this
      );
      this.setState({ ...this.state, intervalID });
    }
  };

  render() {
    return (
      <div className="box">
        <div className="center">
          <h1>
            {this.getTimerString(this.state.time) }
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

export default connect(mapStateToProps, {/* actions */})(Timer);
