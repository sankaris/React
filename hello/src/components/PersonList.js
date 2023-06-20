import React from "react";
import Person from "./Person"
function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Babbi',
            skill: 'React',
            age: 28
        },
        {
            id: 2,
            name: 'Annie',
            skill: 'Angular',
            age: 27
        }
    ]
    const persont = persons.map(person => <Person key={person.id} person={person} />)
    return <div> {persont} </div>

}
export default PersonList