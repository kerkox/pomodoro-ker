import React, { Component } from 'react'
import Timer from '../Timer'
import Task from '../Task'

class Home extends Component {
  render() {
    return (
      <div>
        <Timer />
        <div className="row justify-content-md-center">
          <div className="col-6">
            <Task />
          </div>
        </div>
      </div>
      
    )
  }
}
export default Home