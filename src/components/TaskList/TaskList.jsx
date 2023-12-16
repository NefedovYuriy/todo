import React, { Component } from 'react';

import './task-list.css';
import { Task } from '../Task';

export class TaskList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.task.map((elem) => (
          <Task
            key={elem.id}
            elem={elem}
            onCompleteTask={this.props.onCompleteTask}
            onDeleteTask={this.props.onDeleteTask}
            setTimer={this.props.setTimer}
            editTimerId={this.props.editTimerId}
          />
        ))}
      </ul>
    );
  }
}
