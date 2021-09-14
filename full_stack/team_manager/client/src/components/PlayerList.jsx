import { Link } from 'react-router-dom'
import { useState } from 'react'
const PlayerList = ({ players, onDelete }) => {
    const [state, setState] = useState(false)
    const [idState, setIdState] = useState()
    const clickHandler = (id) => {
        setState(true)
        setIdState(id)
    }
    const confirmDelete = () => {
        setState(false)
        onDelete(idState)
        setIdState()
    }
    return (
        <>
            <table className={`table table-dark table-hover table-striped ` + (state ? `opacity` : '')}>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Acions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => {
                        return <tr key={player.firstName} >
                            <td className="btn-link">{player.firstName} {player.lastName}</td>
                            <td>{player.position}</td>
                            <td><button  onClick={() => clickHandler(player._id)}className="btn btn-danger">Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            {state ? <div className="container-sm alert-box">
                <h3>Are you sure you want to delete?</h3>
                <button className="btn btn-danger me-2" onClick={confirmDelete}>Yes</button>
                <button className="btn btn-warning" onClick={() => setState(false)}>No</button>
            </div>:null}
            <Link to='/players/add' className="btn btn-primary">Add Player</Link>
        </>
    )
}
// onClick={() => onDelete(player._id)}
export default PlayerList
