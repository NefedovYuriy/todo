import React, { Component } from 'react';

import { NewTaskForm } from './NewTaskForm';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onCreateTask={this.props.onCreateTask} distance={this.props.distance} />
      </header>
    );
  }
}
