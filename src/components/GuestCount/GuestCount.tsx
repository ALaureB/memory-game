import React, { FunctionComponent } from 'react';
import './GuestCount.css';

interface IGuestCountProps {
    guesses: number
}

const GuestCount: FunctionComponent<IGuestCountProps> = ({guesses}) => (
    <div className="guesses">
        {guesses}
    </div>
)

export default GuestCount;
