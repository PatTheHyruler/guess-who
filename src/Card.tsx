import './Card.css';
import { useState } from 'react';
import React from 'react';
import { Person } from './Person';

interface CardProps {
    startRound: boolean,
    person: Person,
    removePerson: (id: string) => void,
    selectedPerson: Person | null,
    setSelectedPerson: (person: Person) => void,
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

    const selectButton = () => {
        if (props.selectedPerson) return <></>;
        return (
            <button className='btn btn-success select-button' onClick={(e) => {
                props.setSelectedPerson(props.person);
                e.preventDefault();
                e.stopPropagation();
            }}>Select</button>
        );
    }

    return (
        <div className={classNames} onClick={() => setCrossed(!isCrossed)} >
            <p className='card-title'>{props.person.name}</p>
            <button className='btn btn-danger card-remove' onClick={() => props.removePerson(props.person.id)}>X</button>
            <img alt='' src={props.person.imagePath ?? undefined} />
            {selectButton()}
        </div>
    )
}

export default Card;