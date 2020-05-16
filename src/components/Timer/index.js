import React, { Component } from 'react'

class Timer extends Component {

  constructor(props){
    super(props)
    this.state = {
      timeMinutes: 25,
      timeSeconds: 0,
      pause: false
    }
  }

  initCountDown() {

  }

  getTimerString(time) {
    return `${this.timeString(time.minutes)}:${this.timeString(time.seconds)}`;    
  }

  timeString(time) {
    return time < 10 ? '0'+time : time;
  }


  render() {
    return (
      <div className="box">
        <div className="center">
          <h1>
            { this.getTimerString({minutes: this.state.timeMinutes, seconds: this.state.timeSeconds})}
          </h1>          
        </div>
      </div>
    );
  }
}

export default Timer;
