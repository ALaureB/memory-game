/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component } from 'react';
import './ScoreInput.css';
import { saveHOFEntry } from '../HallOfFame/HallOfFame';

interface IScoreInputProps {
    guesses: number;
    onStored: any;
}

interface IScoreInputState {
    winner: string;
}

export default class ScoreInput extends Component<IScoreInputProps, IScoreInputState> {
  state = { winner: '' };

  // Arrow fx for binding
  handleWinnerUpdate = (event: { target: { value: string; }; }) => {
    this.setState({ winner: event.target.value.toUpperCase() });
  }

  // Arrow fx for binding
  persistWinner = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newEntry = { guesses: this.props.guesses, player: this.state.winner }
    saveHOFEntry(newEntry, this.props.onStored);
  }
  
  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo, tu as remporté la partie ! Entre ton prénom :
            <input type="text" autoComplete="given-name" value={this.state.winner} onChange={this.handleWinnerUpdate}/>
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}
