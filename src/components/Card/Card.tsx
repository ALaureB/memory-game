import React, { FunctionComponent } from 'react';
import './Card.css';

type CardFeedbacks = 'hidden' | 'justMatched' | 'justMismatched' | 'visible';

interface ICardProps {
    card: any,
    feedback: CardFeedbacks,
    index: number,
    onClick: any
}

const HIDDEN_SYMBOL = '❓';

const Card: FunctionComponent<ICardProps> = ({card, feedback, index, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card;
