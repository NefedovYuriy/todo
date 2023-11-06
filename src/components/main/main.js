import React from 'react';
import Footer from '../footer';
import TaskList from '../task-list';
import './main.css'



const Main = ({todos}) => {
   
    return (
    <section className="main">
        <TaskList todos = {todos}/>
        <Footer/>
      </section>
    )
};

export default Main;