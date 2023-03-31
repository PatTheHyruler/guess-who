import './Game.css';
import GameBoard from './GameBoard';
import React from 'react';
import { Person } from './Person';
import SetUp from './SetUp';

interface GameProps {
    playing: boolean,
    people: Array<Person>,
    startRound: boolean,
    host: boolean,
    addPerson: (name: string, imagePath?: string | null) => void,
    removePerson: (id: string) => void,
    clearPeople: () => void,
}

function Game(props: GameProps) {
    return (
        <div>
            <div className="game-play-page">&nbsp;</div>
            <SetUp people={props.people} addPerson={props.addPerson} clearPeople={props.clearPeople}></SetUp>
            <GameBoard
                people={props.people}
                startRound={props.startRound}
                removePerson={props.removePerson}
            />
        </div>
    )
}

export default Game;