import React from "react";
import InputItem from "../../input-item";
import './completed-task.css'

const CompletedTask = () => {
    return (
        <li className="completed">
            <div className="view">
            <InputItem/>
              <label>
                <span className="description">Completed task</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
    )
}

export default CompletedTask