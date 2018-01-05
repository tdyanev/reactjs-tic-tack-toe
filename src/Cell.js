import React, { Component } from 'react';
import './cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  setValue(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className="col-4 cell" onClick={() => {
        if (this.state.value) {
          return;
        }
        this.props.onClick(this);
      }}>{this.state.value}
      </div>
    );
  }
}

export default Cell;
