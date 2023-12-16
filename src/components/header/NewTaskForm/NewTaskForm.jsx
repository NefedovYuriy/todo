import React, { Component } from 'react';
import './new-task-form.css';

export class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDescription: '',
      min: '',
      sec: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      const newTask = {
        className: 'active',
        description: this.state.taskDescription,
        creationTime: new Date(),
        completed: false,
        editing: false,
        id: Date.now(),
        min: this.state.min,
        sec: this.state.sec,
        timerId: null,
      };

      this.props.onCreateTask(newTask);
      this.setState({ taskDescription: '' });
    }
  }

  render() {
    const { taskDescription, min, sec } = this.state;
    return (
      <form onKeyUp={this.handleSubmit} role="presentation" className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={taskDescription}
          onChange={(e) => this.setState({ taskDescription: e.target.value })}
        />
        <input
          placeholder="Min"
          className="new-todo-form__timer"
          onChange={(e) => this.setState({ min: e.target.value })}
          value={min}
          min={0}
          type="number"
        />
        <input
          placeholder="Sec"
          className="new-todo-form__timer"
          onChange={(e) => this.setState({ sec: e.target.value })}
          value={sec}
          min={0}
          type="number"
        />
      </form>
    );
  }
}
