import React from 'react';
// import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'
import TodoListItem from '../todo-list-item/todo-list-item';



const TodoList = ({todos}) => {
    return(
        <ul className="todo-list">
          <TodoListItem todos = {todos}/>
        </ul>
    )
};

export default TodoList;