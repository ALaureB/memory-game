import React, { Component } from 'react';
import shuffle from 'lodash.shuffle';

import './App.css';

import Card from '../../components/Card/Card';
import GuessCount from '../../components/GuestCount/GuestCount';
import HallOfFame, { FAKE_HOF, IFakeHof } from '../../components/HallOfFame/HallOfFame';
import ScoreInput from '../../components/ScoreInput/ScoreInput';

export interface IAppState {
  cards: any,
  currentPair: number[],
  guesses: number,
  matchedCardIndices: number[],
  hallOfFame: IFakeHof[]
}

const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';
const VISUAL_PAUSE_MSECS = 750;

class App extends Component<{}, IAppState> {  
  state:IAppState = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
    hallOfFame: []
  }

  generateCards()  {
    const result = [];
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

  getFeedbackForCard(index: number) {
    const { currentPair, matchedCardIndices } = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden';
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched';
    }
  
    return indexMatched ? 'visible' : 'hidden';
  }

  // Arrow fx for binding
  handleCardClick = (index: number) => {
    const { currentPair } = this.state;

    if (currentPair.length === 2) {
      return;
    }
  
    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] });
      return;
    }
  
    this.handleNewPairClosedBy(index);
  }

  handleNewPairClosedBy(index: number)
  {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state;

    const newPair = [currentPair[0], index];
    const newGuesses = guesses + 1;
    const matched = cards[newPair[0]] === cards[newPair[1]];
    this.setState({ currentPair: newPair, guesses: newGuesses });

    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS);

  }

  // Arrow fx for binding
  displayHallOfFame = (hallOfFame: any) => {
    this.setState({ hallOfFame });
  }
  
  render() {    
    const { cards, guesses, matchedCardIndices, hallOfFame } = this.state;
    const won = matchedCardIndices.length === cards.length;
    
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card: any, index: number) => (
          <Card 
            card={card}
            feedback={this.getFeedbackForCard(index)}
            index={index}
            key={index}
            onClick={this.handleCardClick} />
        ))}

        {won && 
          (hallOfFame ? (
            <HallOfFame entries={hallOfFame} />
          ) : (
            <ScoreInput guesses={guesses} onStored={this.displayHallOfFame} />
          ))
        
        }
      </div>
    )
  }
}

export default App;
