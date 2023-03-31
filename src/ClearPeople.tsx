import React from "react";

interface ClearPeopleElementProps {
    clearPeople: () => void
}

function ClearPeopleElement(props: ClearPeopleElementProps) {
    return (
        <button className="btn btn-danger" onClick={props.clearPeople}>Clear people</button>
    );
}

export default ClearPeopleElement;