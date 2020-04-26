import React, { FunctionComponent } from 'react';
import './Card.css';

interface ICardProps {
    card: any,
    feedback: string,
    onClick: any
}

const HIDDEN_SYMBOL = '❓';

const Card: FunctionComponent<ICardProps> = ({card, feedback, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card;
