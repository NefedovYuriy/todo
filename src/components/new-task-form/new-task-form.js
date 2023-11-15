import React, { Component } from "react";
import "./new-task-form.css";

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDescription: ""
    };
  }
  handleChange = (event) => {
    this.setState({
      taskDescription: event.target.value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    const newTask = {
      className: "active",
      description: this.state.taskDescription,
      creationTime: "created just now",
      completed: false,
      editing: false,
      id: Date.now()
    };
  
    this.props.onCreateTask(newTask);
    this.setState({ taskDescription: "" });
  };
  
  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
        value={this.state.taskDescription}
        onChange={this.handleChange}
      ></input>
      </form>
      
    );
  }
};
