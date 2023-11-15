import React, { Component } from 'react';
import Header from '../header';
import Main from '../main';
import './app.css'

export default class App extends Component {
  state = {
    arrProp: [
      {
        className: "completed",
        description: "Completed task",
        creationTime: "created 17 seconds ago",
        completed: false,
        editing: false,
        id: 1,
      },
      {
        className: "editing",
        description: "Editing task",
        creationTime: "created 5 minutes ago",
        completed: false,
        editing: false,
        id: 2,
      },
      {
        className: "active",
        description: "Active task",
        creationTime: "created 5 minutes ago",
        completed: false,
        editing: false,
        id: 3,
      },
    ],
    activeTab: "All"
  };

  handleTabChange = (tabName) => {
    this.setState({ activeTab: tabName });
  };
  onCompleteTask = (id) => {
    const chengedTasks = this.state.arrProp.map((elem) => {
      if (elem.id === id) elem.completed = !elem.completed;
    });
    this.setState({ chengedTasks });
  };
  onDeleteTask = (id) => {
    const filteredTasks = this.state.arrProp.filter((elem) => elem.id !== id);
    this.setState({ arrProp: filteredTasks });
  };
  onAllDeleteTask = () => {
    const filteredTasks = this.state.arrProp.filter((elem) => !elem.id );
    this.setState({ arrProp: filteredTasks });
  };
  onCreateTask = (newTask) => {
    this.setState(prevState => ({
      arrProp: [...prevState.arrProp, newTask]
    }));
  }
  render (){
    const { arrProp, activeTab } = this.state;

    let filteredTasks;

    if (activeTab === "All") {
      filteredTasks = arrProp;
    } else if (activeTab === "Active") {
      filteredTasks = arrProp.filter((task) => !task.completed);
    } else if (activeTab === "Completed") {
      filteredTasks = arrProp.filter((task) => task.completed);
    }
    return (
      <section className = 'todo-app'>
          <Header onCreateTask = {this.onCreateTask}/>
          <Main 
          task = {filteredTasks} 
          onCompleteTask = {this.onCompleteTask} 
          onDeleteTask = {this.onDeleteTask}
          activeTab={activeTab} 
          onTabChange={this.handleTabChange}
          onAllDeleteTask = {this.onAllDeleteTask}/>
      </section>
      )
  }
}