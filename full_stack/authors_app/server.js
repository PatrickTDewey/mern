const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/author.routes')(app);
require('./server/routes/book.routes')(app);

app.listen(port, () => console.log(`Express Server Listening on port: ${port}`))