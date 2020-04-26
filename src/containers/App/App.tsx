import React, { Component } from 'react';
import shuffle from 'lodash.shuffle';

import './App.css';

import Card from '../../components/Card/Card';
import GuessCount from '../../components/GuestCount/GuestCount';
import HallOfFame, { FAKE_HOF } from '../../components/HallOfFame/HallOfFame';

const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';

class App extends Component {
  
  cards = this.generateCards();

  generateCards() {
    const result = [];
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

  handleCardClick(card: any) {
    console.log(card, 'clicked')
  }
  
  render() {    
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
          <Card
            card={card}
            feedback="visible"
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
        <HallOfFame entries={FAKE_HOF} />
      </div>
    )
  }
}

export default App;
