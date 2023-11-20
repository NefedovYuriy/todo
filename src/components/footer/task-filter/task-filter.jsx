import React, { Component } from 'react';
import './task-filter.css';

export class TaskFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeTab } = this.props;
    return (
      <ul className="filters">
        <li>
          <button className={activeTab === 'All' ? 'selected' : ''} onClick={() => this.props.onTabChange('All')}>
            All
          </button>
        </li>
        <li>
          <button className={activeTab === 'Active' ? 'selected' : ''} onClick={() => this.props.onTabChange('Active')}>
            Active
          </button>
        </li>
        <li>
          <button
            className={activeTab === 'Completed' ? 'selected' : ''}
            onClick={() => this.props.onTabChange('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
