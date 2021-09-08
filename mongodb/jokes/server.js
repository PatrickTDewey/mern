const express = require('express');
const app = express();
const port = 8000
// this will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// This is where we import our routes function(s) from name.routes.js file(s)
const JokeRoutes = require("./server/routes/joke.routes")

JokeRoutes(app)

app.listen(port, () => console.log(`Server Running: ${port}`));

