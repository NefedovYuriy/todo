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
          description: 'Completed',
          creationTime: new Date(),
          completed: false,
          editing: false,
          min: 0,
          sec: 0,
          id: 1,
          timerId: null,
        },
        {
          className: 'editing',
          description: 'Editing',
          creationTime: new Date(),
          completed: false,
          editing: false,
          id: 2,
          min: 0,
          sec: 0,
          timerId: null,
        },
        {
          className: 'active',
          description: 'Active',
          creationTime: new Date(),
          completed: false,
          editing: false,
          id: 3,
          min: 0,
          sec: 0,
          timerId: null,
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
  setTimer = (id) => {
    this.setState(({ arrProp }) => {
      console.log(this.state.arrProp);
      console.log(id);
      const index = arrProp.findIndex((el) => el.id === id);
      const oldItem = arrProp[index];
      const { min, sec } = oldItem;
      let newSec = sec - 1;
      let newMin = min;
      if (newSec < 0) {
        if (newMin <= 0) {
          newSec = 0;
          newMin = 0;
        } else {
          newSec = 59;
          newMin = min - 1;
        }
      }
      const newArray = [
        ...arrProp.slice(0, index),
        { ...oldItem, min: newMin, sec: newSec },
        ...arrProp.slice(index + 1),
      ];
      return { arrProp: newArray };
    });
  };

  editTimerId = (id, timerId) => {
    this.setState(({ arrProp }) => {
      const index = arrProp.findIndex((el) => el.id === id);
      const oldItem = arrProp[index];
      const newDate = [...arrProp.slice(0, index), { ...oldItem, timerId }, ...arrProp.slice(index + 1)];
      return { inputData: newDate };
    });
  };

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
          setTimer={this.setTimer}
          editTimerId={this.editTimerId}
        />
      </section>
    );
  }
}
