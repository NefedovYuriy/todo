import React, { Component } from 'react';
import './сustomInput.css';

export class CustomInput extends Component {
  render() {
    const { handleClick, id } = this.props;
    return <input className="toggle" type="checkbox" onClick={() => handleClick(id)} />;
  }
}
