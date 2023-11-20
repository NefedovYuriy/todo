import React, { Component } from 'react';
import './new-task-form.css';

export class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDescription: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      taskDescription: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      className: 'active',
      description: this.state.taskDescription,
      creationTime: new Date(),
      completed: false,
      editing: false,
      id: Date.now(),
    };

    this.props.onCreateTask(newTask);
    this.setState({ taskDescription: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.taskDescription}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}
