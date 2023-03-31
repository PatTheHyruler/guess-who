import './SetUp.css';
import React from 'react';
import { Person } from './Person';
import ImageFolderSelector from './ImageFolderSelector';


interface SetUpProps {
    people: Array<Person>;
    addPerson: (name: string, imagePath?: string | null) => void;
    removePerson: (name: string) => void;
    clearPeople: () => void;
}

function SetUp(props: SetUpProps) {
    let people = props.people;

    return (
        <div>
            <div className="set-up-page">&nbsp;</div>
            <ImageFolderSelector addPerson={props.addPerson} />
        </div>
    )
}

export default SetUp;