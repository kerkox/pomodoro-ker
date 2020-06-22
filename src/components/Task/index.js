import React, { Component } from "react";

export class Task extends Component {
  state = {
    tasks: [{ id: 1, description: "something to do" }],
      task: {
        id: 2,
        description: "",
        complete: false
      }
  }
  componentDidMount = () => {
    this.setState({
      ...this.state
    })
  }

  getTasks = () => {
    return this.state.tasks.map((task,index) => (
        <div className="input-group mb-3" key={task.id}>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input"/>
            </div>
          </div>
          <input type="text" className="form-control" aria-label="" defaultValue={task.description + `   index: ${index}`}/>
          <input type="button" className="btn btn-danger" defaultValue="Delete" onClick={() => this.deleteTask(task)}/>
        </div>
    ));
  };

  addTask = () => {
    const tasks = this.state.tasks 
    const task = this.getValidTask(this.state.task)
    const taskNew = { ...this.state.task, description:""}
    if(task){
      console.log("task", task)
      tasks.push(task);
      taskNew.id += 1
      this.setState({tasks: tasks, task:taskNew});
    } else {
      console.log("taskNew",taskNew)
      this.setState({task:taskNew});
    }
    
  };

  deleteTask = (task) => {
    // delete task from state
    const tasks = this.state.tasks
    const index = tasks.indexOf(task)
    tasks.splice(index,1)
    this.setState({tasks});
  }

  getValidTask = (task) => this.validateTask(task) && {id:task.id, description:task.description.trim()}

  validateTask = (task) =>  task.description.trim() !== ""

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
          <div className="col-4">
            <input
              type="button"
              className="btn btn-primary"
              value="Add"
              onClick={this.addTask}
            />
          </div>
          <br/>
          <br/>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Add Task description and press enter to save"
                name="task"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.task.description}
              />
            </div>
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
