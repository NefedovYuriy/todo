import React from "react";
import InputItem from "../../input-item";
import './active-task.css'; // test test test test 

const ActiveTask = () => {
    return (
        <li className = 'active'>
            <div className="view">
            <InputItem/>
              <label>
                <span className="description">Active task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
    )
}

export default ActiveTask