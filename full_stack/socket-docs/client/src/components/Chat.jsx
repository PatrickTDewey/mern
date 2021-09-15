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
import '../index.css'
const styles = {
    button: {
        marginTop: '10px'
    },
    box: {
        padding: '1em'
    },
    label: {
        padding: '5px'
    },
    ul: {
        display:'flex',
        flexDirection:'column-reverse',
        
    }
}
const Chat = ({ name }) => {
    const [socket] = useState(() => io(':8000'))
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(() => {
        socket.on('welcome', data => {
            console.log(data);
        })
        socket.on('message_from_server', data => {
            setMessages(prevMessages => {
                return [data, ...prevMessages]
            })
        })
        socket.emit('user_join', {name:'server', msg: `${name} has joined chat.`})
        return () => {socket.disconnect(true)};
    }, [socket, name])
    const addMessage = (e) => {
        e.preventDefault()
        setMessages([{name, msg: input}, ...messages])
        socket.emit('message', {name, msg: input})
        setInput('')
        
    }
    return (
        <div>
            <p>{name} has joined the chat</p>
            <Box my={4} component={Paper} style={styles.box}>
                <ul className="ul">
                {messages.length >= 1 ? messages.map(message => <li><strong>{message.name}:</strong> {message.msg}</li>):null}
                </ul>
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