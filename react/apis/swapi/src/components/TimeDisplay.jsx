import React, { useState, useEffect } from 'react'

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleString())
    useEffect(() => {
        const int = setInterval(() => setTime(new Date().toLocaleString()), 1000)
        return () => clearInterval(int);
    }, [])
    return (
        <>
          <p>{time}</p>
        </>
    )
}

export default TimeDisplay
