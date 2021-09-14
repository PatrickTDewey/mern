import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerList from '../components/PlayerList'
const Main = () => {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/api/players/list")
      .then(res => setPlayers(res.data))
  }, []);
  const deletePlayer = ( id) => {
    axios.delete(`http://localhost:8000/api/players/delete/${id}`)
    setPlayers(players.filter(player => player._id !== id))
  }
  
  return (
    <div className="">
      <PlayerList players={players} onDelete={deletePlayer}/>
    </div>
  )
}
export default Main


