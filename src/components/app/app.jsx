import React, { Component } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProp: [
        {
          className: 'completed',
          description: 'Completed task',
          creationTime: new Date(),
          completed: false,
          editing: false,
          id: 1,
        },
        {
          className: 'editing',
          description: 'Editing task',
          creationTime: new Date(),
          completed: false,
          editing: false,
          id: 2,
        },
        {
          className: 'active',
          description: 'Active task',
          creationTime: new Date(),
          completed: false,
          editing: false,
          id: 3,
        },
      ],
      activeTab: 'All',
    };
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.onCompleteTask = this.onCompleteTask.bind(this);
    this.onDeleteCompletedTask = this.onDeleteCompletedTask.bind(this);
    this.onCreateTask = this.onCreateTask.bind(this);
  }

  handleTabChange(tabName) {
    this.setState({ activeTab: tabName });
  }
  onCompleteTask(id) {
    const changedTasks = this.state.arrProp.map((elem) => {
      if (elem.id === id) elem.completed = !elem.completed;
    });
    this.setState({ changedTasks });
  }
  onDeleteTask(id) {
    const filteredTasks = this.state.arrProp.filter((elem) => elem.id !== id);
    this.setState({ arrProp: filteredTasks });
  }
  onDeleteCompletedTask() {
    const filteredTasks = this.state.arrProp.filter((elem) => !elem.completed);
    this.setState({ arrProp: filteredTasks });
  }
  onCreateTask(newTask) {
    this.setState((prevState) => ({
      arrProp: [...prevState.arrProp, newTask],
    }));
  }
  render() {
    const { arrProp, activeTab } = this.state;
    let filteredTasks;

    if (activeTab === 'All') {
      filteredTasks = arrProp;
    } else if (activeTab === 'Active') {
      filteredTasks = arrProp.filter((task) => !task.completed);
    } else if (activeTab === 'Completed') {
      filteredTasks = arrProp.filter((task) => task.completed);
    }
    return (
      <section className="todo-app">
        <Header onCreateTask={this.onCreateTask} />
        <Main
          task={filteredTasks}
          onCompleteTask={this.onCompleteTask}
          onDeleteTask={this.onDeleteTask}
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          onDeleteCompletedTask={this.onDeleteCompletedTask}
        />
      </section>
    );
  }
}
