import React from 'react';
import Footer from '../footer';
import TodoList from '../todo-list';
import './main.css'



const Main = ({todos}) => {
   
    return (
    <section className="main">
        <TodoList todos = {todos}/>
        <Footer/>
      </section>
    )
};

export default Main;