import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/'> Manage Players </Link> |
            <Link to='/status/game/1'> Manage Player Statuses </Link>
        </div>
    )
}

export default NavBar
