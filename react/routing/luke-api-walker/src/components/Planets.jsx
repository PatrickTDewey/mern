import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = (props) => {
    const [result, setResult] = useState([])
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        console.log('this is the request');
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                setResult(res.data)
                console.log(res.data);
            }).catch(e => console.log(e))

    }, [id])
    return (
        <div>
            <h1>Planets</h1>
            <div className="info">
                <h3>Name: {result.name}</h3>
                <h3>Terrain: {result.terrain}</h3>
                <h3>Population: {result.population}</h3>
                <h3>Surface Water: {result.surface_water}</h3>
            </div>
        </div>
    )
}

export default Planets
