import {
    Paper,
    FormControl,
    FormGroup,
    InputLabel,
    OutlinedInput,
    Box,
    Typography,
    Button
} from '@material-ui/core'
import { useState } from 'react'
import io from 'socket.io-client'
const styles = {
    button: {
        marginTop: '10px'
    },
    box: {
        padding: '1em'
    },
    label: {
        padding: '5px'
    }
}
const SetName = ({ onSubmit }) => {
    const [input, setInput] = useState('')
    const [socket] = useState(() => io(':8000'))
    const addName = (e) => {
        socket.emit('joinRoom', input)
        e.preventDefault()
        console.log(e);
        onSubmit(input)
        setInput('')

    }
    return (
        <Box my={4} component={Paper} style={styles.box}>
                <FormGroup>
                    {/* {errors.firstName ? <Typography color="secondary">{errors.firstName}</Typography> : null} */}
                    <FormControl >
                        <InputLabel style={styles.label}>First Name</InputLabel>
                        <OutlinedInput type="text" id="name" value={input} onChange={(e) => setInput(e.target.value)} />
                    </FormControl>
                </FormGroup>
            <Button color="primary" style={styles.button} variant="contained" size="small" onClick={(e) => addName(e)}>Submit</Button>
            {/* <Typography variant="h3" component="h3" align="center" gutterBottom>Set Name Component</Typography> */}
        </Box>
    )
}

export default SetName
