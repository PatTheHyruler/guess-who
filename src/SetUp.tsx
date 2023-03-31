import './SetUp.css';
import React from 'react';
import { Person } from './Person';
import ImageFolderSelector from './ImageFolderSelector';
import ClearPeopleElement from './ClearPeople';


interface SetUpProps {
    people: Array<Person>;
    addPerson: (name: string, imagePath?: string | null) => void;
    removePerson: (name: string) => void;
    clearPeople: () => void;
}

function SetUp(props: SetUpProps) {
    return (
        <div>
            <div className="set-up-page">&nbsp;</div>
            <div className='set-up-container'>
                <ImageFolderSelector addPerson={props.addPerson} />
                <ClearPeopleElement clearPeople={props.clearPeople}></ClearPeopleElement>
            </div>
        </div>
    )
}

export default SetUp;