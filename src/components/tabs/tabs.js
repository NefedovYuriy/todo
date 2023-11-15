import { React, Component } from "react";

export default class Tabs extends Component {
  render() {
    const { activeTab, onTabChange } = this.props;

    return (
      <div className="tabs">
        <button
          className={activeTab === "All" ? "active" : ""}
          onClick={() => onTabChange("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Active" ? "active" : ""}
          onClick={() => onTabChange("Active")}
        >
          Active
        </button>
        <button
          className={activeTab === "Completed" ? "active" : ""}
          onClick={() => onTabChange("Completed")}
        >
          Completed
        </button>
      </div>
    );
  }
}
