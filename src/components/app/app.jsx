import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { Header } from '../header';
import { Main } from '../main';

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProp: [
        {
          className: 'completed',
          description: 'Completed task',
          creationTime: 'created 17 seconds ago',
          completed: false,
          editing: false,
          id: 1,
        },
        {
          className: 'editing',
          description: 'Editing task',
          creationTime: 'created 5 minutes ago',
          completed: false,
          editing: false,
          id: 2,
        },
        {
          className: 'active',
          description: 'Active task',
          creationTime: 'created 5 minutes ago',
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
    this.onAllDeleteTask = this.onAllDeleteTask.bind(this);
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
  onAllDeleteTask() {
    const filteredTasks = this.state.arrProp.filter((elem) => !elem.id);
    this.setState({ arrProp: filteredTasks });
  }
  onCreateTask(newTask) {
    this.setState((prevState) => ({
      arrProp: [...prevState.arrProp, newTask],
    }));
  }
  render() {
    const { arrProp, activeTab } = this.state;
    const date = new Date();
    const distance = formatDistanceToNow(date, { addSuffix: true });
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
        <Header onCreateTask={this.onCreateTask} distance={distance} />
        <Main
          task={filteredTasks}
          onCompleteTask={this.onCompleteTask}
          onDeleteTask={this.onDeleteTask}
          activeTab={activeTab}
          onTabChange={this.handleTabChange}
          onAllDeleteTask={this.onAllDeleteTask}
        />
      </section>
    );
  }
}
