import React, { Component, Fragment } from "react";
import "./task.css";
import CustomInput from "./custom-input";
export default class Task extends Component {
  render() {
    const { elem } = this.props;
    return (
      <Fragment>
        <li className={elem.completed ? "completed" : "active"}>
          <div className="view">
            <CustomInput handleClick={this.props.onCompleteTask} id={elem.id} />
            <label>
              <span className="description">{elem.description}</span>
              <span className="created">{elem.creationTime}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button
              className="icon icon-destroy"
              onClick={() => this.props.onDeleteTask(elem.id)}
            ></button>
          </div>
          {elem.className === "editing" ? (
            <input type="text" className="edit" value="Editing task" />
          ) : null}
        </li>
      </Fragment>
    );
  }
}
