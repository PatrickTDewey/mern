import React from 'react'

const Planets = ({planet}) => {
    return (
        <div>
            <h1>Planets</h1>
            <div className="info">
                <h3>Name: {planet.name}</h3>
                <h3>Terrain: {planet.terrain}</h3>
                <h3>Population: {planet.population}</h3>
                <h3>Surface Water: {planet.surface_water}</h3>
            </div>
        </div>
    )
}

export default Planets
