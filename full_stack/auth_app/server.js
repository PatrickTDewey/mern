const express = require("express");
const cors = require("cors") ;
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express();
const port = 8000;
require('./server/config/mongoose.config');


app.use(cookieParser())
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/user.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));
