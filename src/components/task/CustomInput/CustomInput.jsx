import React, { Component } from 'react';
import './customInput.css';

export class CustomInput extends Component {
  render() {
    const { handleClick, id } = this.props;
    return <input className="toggle" type="checkbox" onClick={() => handleClick(id)} />;
  }
}
