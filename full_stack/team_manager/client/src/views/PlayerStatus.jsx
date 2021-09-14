import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const PlayerStatus = () => {

    const { game_id } = useParams();
    const [players, setPlayers] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/players/list")
            .then(res => {
                let unsorted = res.data
                setPlayers(unsorted.sort( (a, b) => a.lastName.localeCompare(b.lastName)))
            })
            .catch(err => console.log(err))
    }, [game_id])
    const handleClick = (e, player) => {
        let filteredp = players.filter(a => player._id !== a._id)
        let editedArray = [...player.gameStatuses];
        editedArray[game_id-1] = parseInt(e.target.value)
        player = {...player, gameStatuses: editedArray}
        
        axios.put('http://localhost:8000/api/players/update/' + player._id, player)
            .then(res => {
                let unsorted = [...filteredp, player]
                setPlayers(unsorted.sort((a,b)=>(a.lastName.localeCompare(b.lastName) )))})
            .catch(err => console.log(err))
    }
    return (
        <div>
            {players &&
            <div className="container">
                <h1> Player Status - Game {game_id} </h1>
                <div className="d-flex">
                    <Link className="me-2" to='/status/game/1'>Game 1</Link>
                    <Link className="me-2" to='/status/game/2'>Game 2</Link>
                    <Link className="me-2" to='/status/game/3'>Game 3</Link>
                </div>
                <table className="table table-dark table-hover table-striped">
                    <thead>
                        <tr>
                            <td>Player</td>
                            <td>Status</td> 
                        </tr>
                    </thead>
                    <tbody>
                        {players && players.map((player, i)=>{
                            return <tr key={i}>
                                <td>{player.firstName} {player.lastName} </td>
                                <td>
                                    <button onClick={(e)=>{handleClick(e, player)}} className={ player.gameStatuses[game_id -1] === 1 ?  'btn btn-success me-2' : 'btn btn-light me-2'} value={1}>Playing</button>
                                    <button onClick={(e)=>{handleClick(e, player)}} className={ player.gameStatuses[game_id -1] === 2 ?  'btn btn-danger me-2' : 'btn btn-light me-2'} value={2}>Not Playing</button>
                                    <button onClick={(e)=>{handleClick(e, player)}} className={ player.gameStatuses[game_id -1] === 0 ?  'btn btn-warning' : 'btn btn-light'} value={0}>Undecided</button>
                                </td>

                            </tr>

                        })}
                    </tbody>


                </table>
            </div>

            }


        </div>
    )
}

export default PlayerStatus
