import React from 'react'
import { useEffect } from 'react'
const Fetch = () => {
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
          .then(res => res.json())
          .then(resJSON => console.log(resJSON))
        
    })
    return (
        <div>
            
        </div>
    )
}

export default Fetch
