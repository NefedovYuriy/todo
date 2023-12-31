import React, { Component } from 'react';

import './footer.css';
import { TaskFilter } from './TaskFilter';

export class Footer extends Component {
  render() {
    const arrCompletedTask = this.props.task.filter((elem) => elem.completed);

    return (
      <footer className="footer">
        <span className="todo-count">{arrCompletedTask.length}</span>
        <TaskFilter activeTab={this.props.activeTab} onTabChange={this.props.onTabChange} />
        <button className="clear-completed" onClick={this.props.onDeleteCompletedTask}>
          Clear completed
        </button>
      </footer>
    );
  }
}
