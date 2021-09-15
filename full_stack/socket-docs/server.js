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

io.on('connection', (socket) => {
    console.log('user connected with id:', socket.id);
    socket.emit('welcome', 'Welcome to socket')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message_from_server', msg);
    })
    socket.on('user_join', (msg) => {
        io.emit('message_from_server', msg);
    })
    socket.on('disconnect', () => {
        console.log(`User with id: ${socket.id} disconnected`);
    })
})