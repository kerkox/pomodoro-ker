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


  render() {
    return (
      <div className="center">
        <h1>
          {this.state.timeMinutes} : { this.state.timeSeconds }
        </h1>
      </div>
    );
  }
}

export default Timer;
