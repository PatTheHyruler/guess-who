import './Game.css';
import GameBoard from './GameBoard';
import React from 'react';
import { Person } from './Person';
import ImageFolderSelector from './ImageFolderSelector';

interface GameProps {
    playing: boolean,
    people: Array<Person>,
    startRound: boolean,
    host: boolean,
    addPerson: (name: string, imagePath?: string | null) => void,
    removePerson: (name: string) => void,
    clearPeople: () => void,
}

function Game(props: GameProps) {
    let names = props.people;

    return (
        <div>
            <div className="game-play-page">&nbsp;</div>
            <ImageFolderSelector addPerson={props.addPerson} ></ImageFolderSelector>
            <GameBoard
                people={names}
                startRound={props.startRound}
            />
        </div>
    )
}

export default Game;