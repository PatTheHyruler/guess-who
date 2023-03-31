import React from 'react';
import Card from './Card';
import { Person } from './Person';

interface GameBoardProps {
    people: Array<Person> | null,
    startRound: boolean
}

function GameBoard(props: GameBoardProps) {
    let allCard = props.people?.map((person: Person) => {
        return (
            <Card
                key={person.name}
                person={person}
                startRound={props.startRound}
            />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {allCard}
            </div>
        </div>
    )

}

export default GameBoard;