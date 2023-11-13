import React, { Component } from "react";
import "./task-list.css";
import Task from "../task";

export default class TaskList extends Component {
  
  render() {
    return (
      <ul className="todo-list">
        {this.props.task.arrProp.map((elem) => {
          return (
            <Task
              key={elem.id}
              elem={elem}
              onCompleteTask={this.props.onCompleteTask}
              onDeleteTask={this.props.onDeleteTask}
            />
          );
        })}
      </ul>
    );
  }
}
