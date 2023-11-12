import React from "react";
import Footer from "../footer";
import TaskList from "../task-list";
import "./main.css";

const Main = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <section className="main">
      <TaskList />
      <Footer />
    </section>
  );
};

export default Main;
