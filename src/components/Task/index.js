import React, { Component } from "react";

export class Task extends Component {
  state = {
    tasks: [{ id: 1, description: "something to do" }],
      task: {
        id: 2,
        description: "",
      }
  }
  componentDidMount = () => {
    this.setState({
      ...this.state
    })
  }

  getTasks = () => {
    return this.state.tasks.map((task) => <li key={task.id}>{task.description}</li>);
  };

  addTask = () => {
    const tasks = this.state.tasks 
    tasks.push(this.state.task);
    const taskNew = {id:(this.state.task.id+1), description:""}
    this.setState({tasks: tasks, task:taskNew});
  };

  handleKeyPress = (event) => {
    if(event.key === 'Enter') this.addTask()
  }

  handleChange = (event) => {
    event.persist();
    const value = event.target.value
    const task = {...this.state.task, description: value}
    this.setState({task})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-10">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Task description"
                name="task"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.task.description}
              />
            </div>
          </div>
          <div className="col">
            <input
              type="button"
              className="btn btn-primary"
              value="Add"
              onClick={this.addTask}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul>{this.getTasks()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
