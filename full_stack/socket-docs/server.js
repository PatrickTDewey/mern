const express = require("express");
const cors = require("cors") ;
const app = express();
const port = 8000;
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/user.routes')(app);
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));
const io = require('socket.io')(server, {cors: true})

let history = []
io.on('connection', (socket) => {
    console.log('user connected with id:', socket.id);
    console.log(history);
    socket.emit('welcome', 'Welcome to socket')
    socket.broadcast.emit('initial_data', history)
    socket.on('message', (msg) => {
        history = [msg, ...history]
        socket.broadcast.emit('message_from_server', msg);
    })
    socket.emit('history', history)
    socket.on('user_join', (msg) => {
        history = [msg, ...history]
        io.emit('message_from_server', msg);
    })
    socket.on('disconnect', () => {
        console.log(`User with id: ${socket.id} disconnected`);
    })
})