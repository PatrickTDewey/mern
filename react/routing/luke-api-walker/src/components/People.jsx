import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const People = ({person}) => {
    const [homeWorld, setHomeWorld] = useState('')
    axios.get(`${person.homeworld}`).then(res => setHomeWorld(res.data.name))
    return (
        <div>
            <h1>People</h1>
            <div className="info">
                <h3>Name: {person.name}</h3>
                <h3>Height: {person.height}</h3>
                <h3>Mass: {person.mass}</h3>
                {
                    homeWorld? <h3>HomeWorld: {homeWorld}</h3> : null
                }
            </div>
        </div>
    )
}

export default People
