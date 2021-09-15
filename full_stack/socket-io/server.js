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

io.on("connection", socket => {
    // NOTE: each client that connects gets their own socket id!
    console.log(socket.id);
    console.log('Nice to meet you');
    // if this is logged in our node terminal, that means a new client
    // has successfully completed the handshake
    socket.emit('welcome', 'Hi There')
    // We add all of our additional event listeners
    // right inside this function.
    // NOTE: "connection" is a built-in event listener
    socket.on("event_from_client", data => {socket.emit('Welcome', 'this is my welcome string')
        socket.broadcast.emit("send_data_to_all_other_clients", data);
        
    });
    // io.emit emits an event to all connected clients
    // socket.broadcast.emit emits an event to all clients other than this particular one referenced by the socket variable
    // socket.emit emits an event directly to this specific client
});