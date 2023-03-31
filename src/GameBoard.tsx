import React from 'react';
import Card from './Card';
import { Person } from './Person';
import './GameBoard.css';

interface GameBoardProps {
    people: Array<Person> | null,
    startRound: boolean,
    removePerson: (id: string) => void,
    selectedPerson: Person | null,
    setSelectedPerson: (person: Person) => void,
}

function GameBoard(props: GameBoardProps) {
    let allCard = props.people?.map((person: Person) => {
        return (
            <Card
                key={person.id}
                person={person}
                startRound={props.startRound}
                removePerson={props.removePerson}
                selectedPerson={props.selectedPerson}
                setSelectedPerson={props.setSelectedPerson}
            />
        )
    })

    return (
        <div className="cards-container">
            {allCard}
        </div>
    )
}

export default GameBoard;