import React from 'react';
import './todo-list-item.css';
import EditingTask from './task/editing-task';
import ActiveTask from './task/active-task';
import CompletedTask from './task/completed-task';

const TodoListItem = ({}) => {
    return (
        <div>
            <CompletedTask/>
            <EditingTask/>
            <ActiveTask/>
        </div>
        
    )
};

export default TodoListItem;