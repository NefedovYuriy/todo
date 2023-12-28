import React from 'react';
import PropTypes from 'prop-types';
import './taskFilter.css';

export function TaskFilter({ filter, onFilterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const button = buttons.map(({ name, label }) => {
    const selected = filter === name;
    const classBtn = selected ? 'selected' : ' ';
    return (
      <li key={name}>
        <button className={classBtn} type="button" onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{button}</ul>;
}

TaskFilter.defaultProps = {
  filter: 'all',
};

TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
