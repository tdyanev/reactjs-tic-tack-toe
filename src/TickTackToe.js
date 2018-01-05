import React, { Component } from 'react';
import Cell from './Cell';
import './TickTackToe.css';

class TickTackToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: new Array(9).fill('.'),
      labels: ['X', 'O'],
      currentLabelId: 0,
      running: true,
      winner: null,
    };
  }

  onCellClick(cell) {
    if (!this.state.running) {
      return;
    }

    this.setState((prevState) => {
      const { cells } = this.state;
      const value = prevState.labels[prevState.currentLabelId];

      cells[cell.props.id] = value;

      cell.setValue(value);

      const { running, winner } = this.gameStatus(cells, value);

      return {
        cells,
        currentLabelId: prevState.currentLabelId ^ 1,
        running,
        winner,
      };
    });

  }

  gameStatus(cells, value) {
    const data = {
      winner: null,
    };

    let string = cells.join('');

    let hasWinner = value === 'X' ?
      /X...X...X|X..X..X|^(...)*XXX|^..X.X.X/.test(string) :
      /O...O...O|O..O..O|^(...)*OOO|^..O.O.O/.test(string);

    if (hasWinner) {
      data.winner = value;
    }

    data.running = !hasWinner && (/\./.test(string));

    return data;
  }

  render() {
    const cells = this.state.cells.map((val, id) =>
      <Cell key={id} id={id} onClick={(cell) => this.onCellClick(cell)} />
    );

    const winner = this.state.winner ?
      (<span>The winner is { this.state.winner }</span>) :
      (<span>Tie game!</span>);

    const status = this.state.running ?
      null : (
      <div className="status">
        <p>Game Over! { winner }</p>
      </div>
    );

    return (
      <div className="box">
        <div className="row">
          {cells}
        </div>
        {status}
      </div>
    );
  }
}

export default TickTackToe;
