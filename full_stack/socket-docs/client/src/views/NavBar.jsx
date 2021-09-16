import {Box, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <Box my={4}>
            <Typography variant="h1" component="h1" align="center" gutterBottom>MERN Chat</Typography>
            <Link to="/room1">Room 1</Link>|<Link to="/room1">Room 1</Link>|<Link to="/room1">Room 3</Link>
        </Box>
    )
}

export default NavBar
