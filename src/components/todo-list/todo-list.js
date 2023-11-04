import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = ({todos}) => {
    const element = todos.map((elem) => {

        const {id, ...restElem} = elem;
        return (
            <li key = {id} className = 'list-group-item'>
                <TodoListItem {...restElem}/>
            </li>
        )
    })
    return(
        <ul className = 'list-group todo-list'>
           {element}
        </ul>
    )
};

export default TodoList;