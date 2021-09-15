import { useState, useEffect } from 'react'
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
const Chat = ({ name }) => {
    const [socket] = useState(() => io(':8000'))
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [flipper, setFlipper] = useState(false);
    useEffect(() => {
        socket.on('welcome', data => {
            console.log(data);
        })
        socket.on('message', data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages]
            })
            setInput('')
        })
        return () => socket.disconnect(true);
    }, [flipper, socket])
    const addMessage = (e) => {
        e.preventDefault()
        
        socket.emit('message',input)
        setFlipper(true)
        
    }
    return (
        <div>
            <p>{name} has joined the chat</p>
            <Box my={4} component={Paper} style={styles.box}>
                {messages.length > 1 ? messages.map(msg => <p>{msg}</p>):null}
                <FormGroup>
                    {/* {errors.firstName ? <Typography color="secondary">{errors.firstName}</Typography> : null} */}
                    <FormControl >
                        <InputLabel style={styles.label}>Message: </InputLabel>
                        <OutlinedInput type="text" id="name" value={input} onChange={(e) => setInput(e.target.value)} />
                    </FormControl>
                </FormGroup>
                <Button color="primary" style={styles.button} variant="contained" size="small" onClick={(e) => addMessage(e)}>Submit</Button>
                {/* <Typography variant="h3" component="h3" align="center" gutterBottom>Set Name Component</Typography> */}
            </Box>
        </div>
    )
}

export default Chat