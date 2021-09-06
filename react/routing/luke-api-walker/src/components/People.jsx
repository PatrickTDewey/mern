import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams, useHistory}  from 'react-router-dom'
const People = (props) => {
    const [homeWorld, setHomeWorld] = useState({})
    const [result, setResult] = useState([])
    const {id} = useParams()
    const history = useHistory()
    
    useEffect(() => {
          axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                setResult(res.data)
                axios.get(res.data.homeworld).then(response => {
                    setHomeWorld(response.data)
                }).catch(e => console.log(e))
            }).catch(e => console.log(e))
        
      }, [id])
      const clickHandler = (e) => {
        e.preventDefault()
        console.log(homeWorld.length);
        let pid = homeWorld.url.slice(30);
        history.push(`/planets/${pid}`)
        history.goForward()
    }

    return (
        <div>
            <h1>People</h1>
            <div className="info">
                <h3>Name: {result.name}</h3>
                <h3>Height: {result.height}</h3>
                <h3>Mass: {result.mass}</h3>
                {
                    homeWorld.name ?<button href="" onClick={clickHandler}><h3>HomeWorld: {homeWorld.name}</h3></button> : null
                }
            </div>
        </div>
    )
}

export default People
