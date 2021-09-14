import { Link } from 'react-router-dom'
const PlayerList = ({ players, onDelete }) => {
    return (
        <>
            <table className="table table-dark table-hover table-striped">
                {/* map players  */}
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Acions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => {
                        return <tr key={player.firstName}>
                            <td className="btn-link">{player.firstName} {player.lastName}</td>
                            <td>{player.position}</td>
                            <td><button onClick={() => onDelete(player._id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Link to='/players/add' className="btn btn-primary">Add Player</Link>
        </>
    )
}

export default PlayerList
