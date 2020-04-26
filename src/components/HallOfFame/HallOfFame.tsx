/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FunctionComponent } from 'react';
import './HallOfFame.css';

interface IHallOfFameProps {
    entries: IFakeHof[]
}

const HallOfFame: FunctionComponent<IHallOfFameProps> = ({entries}) => (
  <table className="hallOfFame">
    <tbody>
      {
        entries.map(({id, guesses, date, player}) => (
          <tr key={id}>
            <td className="date">{date}</td>
            <td className="guesses">{guesses}</td>
            <td className="player">{player}</td>
        </tr>
        ))
      }
    </tbody>
  </table>
  
)

export default HallOfFame;

export interface IFakeHof {
  id: number;
  guesses: number;
  date: string;
  player: string;
}

export const FAKE_HOF: IFakeHof[]  = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
];
