import React, { Component } from 'react';

import { Footer } from '../Footer';
import { TaskList } from '../TaskList';
import './main.css';

export class Main extends Component {
  render() {
    return (
      <section className="main">
        <TaskList
          task={this.props.task}
          onCompleteTask={this.props.onCompleteTask}
          onDeleteTask={this.props.onDeleteTask}
          setTimer={this.props.setTimer}
          editTimerId={this.props.editTimerId}
        />
        <Footer
          activeTab={this.props.activeTab}
          onTabChange={this.props.onTabChange}
          onDeleteCompletedTask={this.props.onDeleteCompletedTask}
          task={this.props.task}
        />
      </section>
    );
  }
}
