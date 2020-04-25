import React from 'react';
import './GuestCount.css';

type GuestCountProps = {
    guesses: number
}

const GuestCount = ({guesses} : GuestCountProps) => (
    <div className="guesses">
        {guesses}
    </div>
)

export default GuestCount;
