import React from "react";
import InputItem from "../../input-item";
import './editing-task.css'

const EditingTask = () => {
    return (
        <li className="editing">
            <div className="view">
              <InputItem/>
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task"/>
          </li>
    )
}

export default EditingTask