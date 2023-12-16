import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import { CustomInput } from './CustomInput';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.timer = props.elem.timerId;

    this.state = {
      finalDelete: false,
      isPlayed: Boolean(this.timer),
    };
  }

  startTimer = () => {
    const { setTimer, editTimerId, elem } = this.props;
    this.timer = setInterval(() => {
      setTimer(elem.id);
    }, 1000);
    editTimerId(this.timer);
    this.setState({ isPlayed: true });
  };

  pauseTimer = () => {
    const { editTimerId, elem } = this.props;
    editTimerId(elem.id, this.timer);
    clearInterval(this.timer);
    this.setState({ isPlayed: false });
  };
  componentWillUnmount() {
    this.pauseTimer();
  }

  render() {
    const { elem } = this.props;
    const { isPlayed } = this.state;
    const { id, description, completed, creationTime, min, sec } = elem;
    return (
      <Fragment>
        <li className={completed ? 'completed' : 'active'}>
          <div className="view">
            <CustomInput handleClick={this.props.onCompleteTask} id={id} />
            <label>
              <span className="description">{description || this.defaultProps.description}</span>
              <span className="created">
                <button
                  type="button"
                  className="icon icon-play"
                  onClick={this.startTimer}
                  disabled={isPlayed}
                  aria-label="play"
                />
                <button
                  type="button"
                  className="icon icon-pause"
                  onClick={this.pauseTimer}
                  disabled={!isPlayed}
                  aria-label="pause"
                />
                {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
              </span>
              <span className="created">{`created ${formatDistanceToNow(creationTime, {
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

Task.defaultProps = {
  description: 'Empty description',
};

Task.propTypes = {
  elem: PropTypes.shape({
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    creationTime: PropTypes.date,
    className: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    timerId: PropTypes.number,
    sec: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  editTimerId: PropTypes.func.isRequired,
};
