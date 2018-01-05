import React, { Component } from 'react';
import './App.css';
import TickTackToe from './TickTackToe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: () => <TickTackToe/>,
    }
  }

  newGame() {
    this.setState({
      game: () => <TickTackToe/>,
    })
  }

  render() {
    const Game = this.state.game;

    return (
      <div className="game container">
        <button onClick={() => this.newGame()}>RESET GAME</button>
        <Game/>
      </div>
    );
  }
}

export default App;
