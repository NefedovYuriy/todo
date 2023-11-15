import React, { Component } from "react";
import Footer from "../footer";
import TaskList from "../task-list";
import "./main.css";

export default class Main extends Component {
  render(){
    return (
      <section className="main">
        <TaskList 
        task = {this.props.task} 
        onCompleteTask = {this.props.onCompleteTask} 
        onDeleteTask = {this.props.onDeleteTask}/>
        <Footer 
        activeTab={this.props.activeTab} 
        onTabChange={this.props.onTabChange}
        onAllDeleteTask = {this.props.onAllDeleteTask}
        task = {this.props.task} />
      </section>
    );
  }
};