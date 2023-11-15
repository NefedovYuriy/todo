import React, { Component } from "react";
import "./task-filter.css";

export default class TaskFilter extends Component {
  state = {
    activeTab: "All"
  };

  // handleTabChange = (tabName) => {
  //   this.setState({ activeTab: tabName });
  // };
  
  render(){
    const { activeTab } = this.state;
    return (
      <ul className="filters">
        <li>
          <button className={activeTab === "All" ? "selected" : ""} onClick={() => this.props.onTabChange("All")}>
            All
          </button>
        </li>
        <li>
          <button className={activeTab === "Active" ? "selected" : ""} onClick={() => this.props.onTabChange("Active")}>
            Active
          </button>
        </li>
        <li>
          <button className={activeTab === "Completed" ? "selected" : ""} onClick={() => this.props.onTabChange("Completed")}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
};

