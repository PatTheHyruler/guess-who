import React from "react";
import { Person } from "./Person";
import './SelectedPerson.css';
import './Card.css'

interface SelectedPersonProps {
    people: Array<Person>,
    person: Person | null,
    clearSelectedPerson: () => void,
    setSelectedPerson: (person: Person) => void,
}

function SelectedPerson(props: SelectedPersonProps) {
    const selectedPersonElement = () => {
        return (
            <div>
                <h3 className="selected-person-title">Your person</h3>
                <div className="card-container">
                    <p className='card-title'>{props.person!.name}</p>
                    <button className='btn btn-dark card-remove' onClick={props.clearSelectedPerson} >X</button>
                    <img alt='' src={props.person!.imagePath ?? undefined} />
                </div>
            </div>
        );
    }

    const getRandomPerson = () => {
        return props.people.at(Math.floor(Math.random() * props.people.length)) ?? null;
    }

    const randomPersonButton = () => {
        if (props.people.length === 0) return <></>;
        return <button className="btn btn-primary" onClick={(() => props.setSelectedPerson(getRandomPerson()!))}>Pick random person</button>
    }

    const selectedOrNotSelectedElement = () => {
        if (props.person === null) {
            return (
                <div className="not-selected">
                    No person selected
                    {randomPersonButton()}
                </div>
            );
        } else {
            return selectedPersonElement();
        }
    }

    return (
        <div className="selected-person-container">
            {selectedOrNotSelectedElement()}
        </div>
    );
}

export default SelectedPerson;