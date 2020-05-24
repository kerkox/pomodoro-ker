import React, { Component } from 'react'

export class Task extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="task">Task:</label>
        <input className="form-control" name="task" id="task"/>
      </div>
    )
  }
}

export default Task
