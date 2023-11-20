import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import { CustomInput } from './CustomInput';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      description: 'Empty description',
    };

    this.propTypes = {
      elem: PropTypes.shape({
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        creationTime: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        editing: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
      onCompleteTask: PropTypes.func.isRequired,
      onDeleteTask: PropTypes.func.isRequired,
    };
  }

  render() {
    const { elem } = this.props;

    return (
      <Fragment>
        <li className={elem.completed ? 'completed' : 'active'}>
          <div className="view">
            <CustomInput handleClick={this.props.onCompleteTask} id={elem.id} />
            <label>
              <span className="description">{elem.description || this.defaultProps.description}</span>
              <span className="created">{`created ${formatDistanceToNow(elem.creationTime, {
                addSuffix: true,
              })}`}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={() => this.props.onDeleteTask(elem.id)}></button>
          </div>
          {elem.className === 'editing' ? <input type="text" className="edit" value="Editing task" /> : null}
        </li>
      </Fragment>
    );
  }
}
