import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from './Person';


function App() {
  const SAMPLE_PEOPLE: Array<Person> = [];

  const [people, setPeople] = useState(SAMPLE_PEOPLE);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const addPerson = (newName: string, imagePath: string | null = null) => {
    setPeople(prevPeople => {
      let newPerson = new Person(crypto.randomUUID(), newName, imagePath);
      let updatedPeople = [...prevPeople];
      updatedPeople.push(newPerson);
      return updatedPeople;
    });
  }

  const removePerson = (id: string) => {
    let removePerson = people.find(p => p.id === id);
    if (!removePerson) return;
    let index = people.indexOf(removePerson);
    let updatedPeople = [...people]
    if (index !== -1) {
      updatedPeople.splice(index, 1);
    }
    setPeople(updatedPeople);
  }

  const clearPeople = () => {
    setPeople([]);
  }

  const clearSelectedPerson = () => {
    setSelectedPerson(null);
  }

  return (
    <BrowserRouter basename='/GuessWho'>
      <div className="app-container">

        <Routes>
          <Route
            path="/"
            element={
              <Game
                people={people}
                playing={true}
                startRound={false}
                host={false}
                addPerson={addPerson}
                removePerson={removePerson}
                clearPeople={clearPeople}
                selectedPerson={selectedPerson}
                setSelectedPerson={setSelectedPerson}
                clearSelectedPerson={clearSelectedPerson}
              />
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
