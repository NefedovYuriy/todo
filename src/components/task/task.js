import React from 'react';
import './task.css';
import InputItem from './input-item';

const Task = ({todos}) => {
    const arrTodos = todos.map((elem) => {
        if (elem.className === 'editing') {
            return (
                <li className={elem.className}>
            <div className="view">
              <InputItem/>
              <label>
                <span className="description">{elem.description}</span>
                <span className="created">{elem.creationTime}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task"/>
          </li>
            )
        }
        return (
            <div>
            <li className = {elem.className}>
            <div className="view">
            <InputItem/>
              <label>
                <span className="description">{elem.description}</span>
                <span className="created">{elem.creationTime}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
        </div>
        )
    })
    
    return (
        <div>
            {arrTodos}
        </div>
    )
};

export default Task;