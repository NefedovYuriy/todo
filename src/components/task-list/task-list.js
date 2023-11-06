import React from 'react';
import './task-list.css'
import Task from '../task';



const TaskList = ({todos}) => {
    return(
        <ul className="todo-list">
          <Task todos = {todos}/>
        </ul>
    )
};

export default TaskList;