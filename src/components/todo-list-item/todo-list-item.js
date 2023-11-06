import React from 'react';
import './todo-list-item.css';
import InputItem from './input-item';

const TodoListItem = ({todos}) => {
    const task = todos.map((elem) => {
        console.log(elem.description)
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
            {task}
        </div>
    )
};

export default TodoListItem;