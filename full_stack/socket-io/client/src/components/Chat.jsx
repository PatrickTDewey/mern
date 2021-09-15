import {useState, useEffect} from 'react'
import io from 'socket.io-client'
const Chat = () => {
    const [socket] = useState(() => io(':8000'))

  useEffect(() => {
    socket.on('welcome', data => console.log(data))
    return () => socket.disconnect(true);
  }, [socket])
    return (
        <div>
            
        </div>
    )
}

export default Chat