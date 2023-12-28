import React from 'react';
import PropTypes from 'prop-types';

import { TaskFilter } from '../TaskFilter';

import './footer.css';

export const Footer = ({ active, filter, onFilterChange, clearComplete }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{active} items left</span>
      <TaskFilter onFilterChange={onFilterChange} filter={filter} />
      <button type="button" className="clear-completed" onClick={clearComplete}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  active: 0,
  onFilterChange: () => {},
  clearComplete: () => {},
};

Footer.propTypes = {
  active: PropTypes.number,
  onFilterChange: PropTypes.func,
  clearComplete: PropTypes.func,
};
