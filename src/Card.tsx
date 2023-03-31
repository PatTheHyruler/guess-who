import './Card.css';
import { useState } from 'react';
import React from 'react';
import { Person } from './Person';

interface CardProps {
    startRound: boolean,
    person: Person
}

function Card(props: CardProps) {
    const [isCrossed, setCrossed] = useState(false);

    if (props.startRound && isCrossed) {
        setCrossed(false);
    }

    let classNames = "card-container";

    if (isCrossed) {
        classNames = "card-container card-clicked";
    }

    return (
        <div className="col-md-2 col-lg-2">
            <div className={classNames} onClick={() => setCrossed(!isCrossed)} >
                <p>{props.person.name}</p>
                <img alt='' src={props.person.imagePath ?? undefined} />
            </div>
        </div>
    )
}

export default Card;