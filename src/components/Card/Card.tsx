import React from 'react';
import './Card.css';

type CardProps = {
    card: string,
    feedback: string
}

const HIDDEN_SYMBOL = '❓';

const Card = ({card, feedback} : CardProps) => (
    <div className={`card ${feedback}`}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card;
