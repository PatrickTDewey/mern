import {useEffect, useState} from 'react'

const People = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
          .then(res => res.json())
          .then(res => setPeople(res.results))
    }, [])
    console.log(people.length? true: false);
    console.log(people);
    return (
        <div>
            <ul style={{padding: '10px'}}>
            {people.map( (person, idx) => <li style={{padding: '5px'}} key={idx}>{person.name}</li>)}
            </ul>
        </div>
    )
}

export default People
