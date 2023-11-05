import React from 'react';
import Footer from '../footer';
import TodoList from '../todo-list';
import './main.css'


const Main = () => {
    return (
    <section className="main">
        <TodoList/>
        <Footer/>
      </section>
    )
};

export default Main;