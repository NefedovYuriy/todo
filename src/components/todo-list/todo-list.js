import React from 'react';
// import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'
import TodoListItem from '../todo-list-item/todo-list-item';

const objProp = [
  {},
  {},
  {}
]

const TodoList = () => {
   
    return(
        <ul className="todo-list">
          <TodoListItem/>
          <TodoListItem label = 'asdasd'/>
          <TodoListItem/>
        </ul>
    )
};

export default TodoList;